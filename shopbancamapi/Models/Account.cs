using System;
using System.Collections.Generic;

namespace shopbancam.Models;

public partial class Account
{
    public int AccountId { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string FullName { get; set; } = null!;

    public string? PhoneNumber { get; set; }

    public int AccountRoleId { get; set; }

    public virtual Role AccountRole { get; set; } = null!;

    public virtual ICollection<Cart> Carts { get; } = new List<Cart>();
}
