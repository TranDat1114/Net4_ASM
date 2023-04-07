using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shopbancam.Models;

namespace shopbancam.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {

        private readonly ILogger<ProductController> _logger;
        private readonly ShopBanCamContext _context;

        public ProductController(ILogger<ProductController> logger, ShopBanCamContext context)
        {
            _logger = logger;
            _context = context;
        }

        private bool BrandExists(int brandId)
        {
            return _context.Brands.Any(b => b.BrandId == brandId);
        }

        private bool CategoryExists(int categoryId)
        {
            return _context.Categories.Any(c => c.CategoryId == categoryId);
        }

        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct([FromBody] Product product)
        {
            // kiểm tra dữ liệu sản phẩm
            // Kiểm tra nếu BrandId và CategoryId hợp lệ thì thêm sản phẩm mới vào database
            if (BrandExists(product.BrandId) && CategoryExists(product.CategoryId) || (_context.Products != null) && (!ModelState.IsValid))
            {
                // tạo đối tượng Product từ ProductModel
                var newProduct = new Product
                {
                    ProductName = product.ProductName,
                    Description = product.Description,
                    Price = product.Price,
                    BrandId = product.BrandId,
                    CategoryId = product.CategoryId,
                    Discount = product.Discount
                };

                // thêm sản phẩm mới vào CSDL
                _context.Products.Add(newProduct);
                await _context.SaveChangesAsync();
                return Ok("Thêm sản phẩm thành công");
            }
            else
            {
                return BadRequest(ModelState);
            }

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {

            var products = await _context.Products.IgnoreAutoIncludes().Select(p => new Product()
            {
                ProductId = p.ProductId,
                ProductName = p.ProductName,
                Description = p.Description,
                Price = p.Price,
                Discount = p.Discount,
                ProductImages = p.ProductImages.Select(pi => new ProductImage()
                {
                    ProductImageId = pi.ProductImageId,
                    Uri = pi.Uri
                }).ToList(),
                Reviews = p.Reviews.Select(pi => new Review()
                {
                    ReviewId = pi.ReviewId,
                    Rating = pi.Rating,
                    ReviewerName = pi.ReviewerName,
                    ReviewText = pi.ReviewText
                }).ToList(),
                CategoryId = p.CategoryId,
                Category = new Category()
                {
                    CategoryId = p.CategoryId,
                    CategoryName = p.Category.CategoryName,
                    Description = p.Category.Description,
                    CategoriesImg = p.Category.CategoriesImg
                },
                BrandId = p.BrandId,
                Brand = new Brand()
                {
                    BrandId = p.BrandId,
                    BrandName = p.Brand.BrandName,
                    Description = p.Brand.Description
                },
            })
           .Take(12)
           .OrderByDescending(p => p.ProductId)
           .AsSingleQuery()
           .ToListAsync();

            return products;
        }

        [HttpGet("{catagory?}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts(string? catagory)
        {
            IQueryable<Product> FQuery = _context.Products;
            if (catagory != "all")
            {
                FQuery = _context.Products.Where(p => p.Category.CategoryName == catagory);
            }
            var products = await FQuery.IgnoreAutoIncludes().Select(p => new Product()
            {
                ProductId = p.ProductId,
                ProductName = p.ProductName,
                Description = p.Description,
                Price = p.Price,
                Discount = p.Discount,
                ProductImages = p.ProductImages.Select(pi => new ProductImage()
                {
                    ProductImageId = pi.ProductImageId,
                    Uri = pi.Uri
                }).ToList(),
                Reviews = p.Reviews.Select(pi => new Review()
                {
                    ReviewId = pi.ReviewId,
                    Rating = pi.Rating,
                    ReviewerName = pi.ReviewerName,
                    ReviewText = pi.ReviewText
                }).ToList(),
                CategoryId = p.CategoryId,
                Category = new Category()
                {
                    CategoryId = p.CategoryId,
                    CategoryName = p.Category.CategoryName,
                    Description = p.Category.Description,
                    CategoriesImg = p.Category.CategoriesImg
                },
                BrandId = p.BrandId,
                Brand = new Brand()
                {
                    BrandId = p.BrandId,
                    BrandName = p.Brand.BrandName,
                    Description = p.Brand.Description
                },
            })
           .Take(12)
           .OrderByDescending(p => p.ProductId)
           .AsSingleQuery()
           .ToListAsync();

            return products;
        }
    }
}