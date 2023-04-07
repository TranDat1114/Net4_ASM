using System;
using System.Collections.Generic;

namespace shopbancam.Models;

public partial class Category
{
    public int CategoryId { get; set; }

    public string CategoryName { get; set; } = null!;

    public string? Description { get; set; }

    public string? CategoriesImg { get; set; }

    public virtual ICollection<Product> Products { get; } = new List<Product>();
}
