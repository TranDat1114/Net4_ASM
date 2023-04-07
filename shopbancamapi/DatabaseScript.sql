CREATE TABLE [Brands] (
    [BrandId] int NOT NULL IDENTITY,
    [BrandName] nvarchar(100) NOT NULL,
    [Description] nvarchar(500) NULL,
    CONSTRAINT [PK_Brands] PRIMARY KEY ([BrandId])
);
GO


CREATE TABLE [Categories] (
    [CategoryId] int NOT NULL IDENTITY,
    [CategoryName] nvarchar(100) NOT NULL,
    [Description] nvarchar(500) NULL,
    [CategoriesImg] varchar(200) NULL DEFAULT (('https://www.ephotozine.com/articles/best-cameras-for-wildlife-photography-2019-33961/images/highres-Canon-EOS-R-3_1536142276.jpg')),
    CONSTRAINT [PK_Categories] PRIMARY KEY ([CategoryId])
);
GO


CREATE TABLE [Roles] (
    [RoleId] int NOT NULL IDENTITY,
    [RoleName] nvarchar(100) NULL,
    [RoleStatus] bit NULL DEFAULT (((0))),
    CONSTRAINT [PK__Roles__8AFACE1A5FFA3C8C] PRIMARY KEY ([RoleId])
);
GO


CREATE TABLE [Products] (
    [ProductId] int NOT NULL IDENTITY,
    [ProductName] nvarchar(100) NOT NULL,
    [Description] nvarchar(500) NULL,
    [Price] decimal(18,2) NOT NULL,
    [BrandId] int NOT NULL,
    [CategoryId] int NOT NULL,
    [Discount] decimal(18,2) NULL DEFAULT (((0))),
    CONSTRAINT [PK_Products] PRIMARY KEY ([ProductId]),
    CONSTRAINT [FK_Products_Brands] FOREIGN KEY ([BrandId]) REFERENCES [Brands] ([BrandId]),
    CONSTRAINT [FK_Products_Categories] FOREIGN KEY ([CategoryId]) REFERENCES [Categories] ([CategoryId])
);
GO


CREATE TABLE [Accounts] (
    [AccountId] int NOT NULL IDENTITY,
    [Email] nvarchar(100) NOT NULL,
    [Password] nvarchar(100) NOT NULL,
    [FullName] nvarchar(100) NOT NULL,
    [PhoneNumber] varchar(255) NULL,
    [AccountRoleId] int NOT NULL DEFAULT (((3))),
    CONSTRAINT [PK_Accounts] PRIMARY KEY ([AccountId]),
    CONSTRAINT [FK__Accounts__Accoun__17F790F9] FOREIGN KEY ([AccountRoleId]) REFERENCES [Roles] ([RoleId])
);
GO


CREATE TABLE [ProductImages] (
    [ProductImageId] int NOT NULL IDENTITY,
    [ProductId] int NOT NULL,
    [Uri] nvarchar(500) NOT NULL,
    CONSTRAINT [PK_ProductImages] PRIMARY KEY ([ProductImageId]),
    CONSTRAINT [FK_ProductImages_Products] FOREIGN KEY ([ProductId]) REFERENCES [Products] ([ProductId])
);
GO


CREATE TABLE [Reviews] (
    [ReviewId] int NOT NULL IDENTITY,
    [ProductId] int NOT NULL,
    [ReviewerName] nvarchar(100) NOT NULL,
    [ReviewText] nvarchar(500) NULL,
    [Rating] int NOT NULL,
    CONSTRAINT [PK_Reviews] PRIMARY KEY ([ReviewId]),
    CONSTRAINT [FK_Reviews_Products] FOREIGN KEY ([ProductId]) REFERENCES [Products] ([ProductId])
);
GO


CREATE TABLE [Carts] (
    [CartId] int NOT NULL IDENTITY,
    [AccountId] int NOT NULL,
    [Status] varchar(20) NOT NULL,
    [CreatedAt] datetime NOT NULL DEFAULT ((getdate())),
    [UpdatedAt] datetime NOT NULL,
    CONSTRAINT [PK__Carts__51BCD7B71DAB11B5] PRIMARY KEY ([CartId]),
    CONSTRAINT [FK__Carts__AccountId__6A30C649] FOREIGN KEY ([AccountId]) REFERENCES [Accounts] ([AccountId])
);
GO


CREATE TABLE [CartItems] (
    [Itemid] int NOT NULL IDENTITY,
    [CartId] int NOT NULL,
    [ProductId] int NOT NULL,
    [quantity] int NOT NULL,
    CONSTRAINT [PK__CartItem__727D8793648D3F98] PRIMARY KEY ([Itemid]),
    CONSTRAINT [FK__CartItems__CartI__6D0D32F4] FOREIGN KEY ([CartId]) REFERENCES [Carts] ([CartId]),
    CONSTRAINT [FK__CartItems__Produ__6E01572D] FOREIGN KEY ([ProductId]) REFERENCES [Products] ([ProductId])
);
GO


CREATE INDEX [IX_Accounts_AccountRoleId] ON [Accounts] ([AccountRoleId]);
GO


CREATE INDEX [IX_CartItems_CartId] ON [CartItems] ([CartId]);
GO


CREATE INDEX [IX_CartItems_ProductId] ON [CartItems] ([ProductId]);
GO


CREATE INDEX [IX_Carts_AccountId] ON [Carts] ([AccountId]);
GO


CREATE INDEX [IX_ProductImages_ProductId] ON [ProductImages] ([ProductId]);
GO


CREATE INDEX [IX_Products_BrandId] ON [Products] ([BrandId]);
GO


CREATE INDEX [IX_Products_CategoryId] ON [Products] ([CategoryId]);
GO


CREATE INDEX [IX_Reviews_ProductId] ON [Reviews] ([ProductId]);
GO


