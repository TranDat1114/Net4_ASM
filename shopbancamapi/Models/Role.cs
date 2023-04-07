using System;
using System.Collections.Generic;

namespace shopbancam.Models;

public partial class Role
{
    public int RoleId { get; set; }

    public string? RoleName { get; set; }

    public bool? RoleStatus { get; set; }

    public virtual ICollection<Account> Accounts { get; } = new List<Account>();
}
