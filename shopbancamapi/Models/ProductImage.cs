using System;
using System.Collections.Generic;

namespace shopbancam.Models;

public partial class ProductImage
{
    public int ProductImageId { get; set; }

    public int ProductId { get; set; }

    public string Uri { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;
}
