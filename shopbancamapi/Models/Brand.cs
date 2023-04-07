using System;
using System.Collections.Generic;

namespace shopbancam.Models;

public partial class Brand
{
    public int BrandId { get; set; }

    public string BrandName { get; set; } = null!;

    public string? Description { get; set; }


    public virtual ICollection<Product> Products { get; } = new List<Product>();
}
