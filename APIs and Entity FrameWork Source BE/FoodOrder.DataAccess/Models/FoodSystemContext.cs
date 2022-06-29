using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FoodOrder.DataAccess.Models
{
    public partial class FoodSystemContext : DbContext
    {
        public FoodSystemContext()
        {
        }

        public FoodSystemContext(DbContextOptions<FoodSystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ContactMst> ContactMsts { get; set; } = null!;
        public virtual DbSet<OrderMst> OrderMsts { get; set; } = null!;
        public virtual DbSet<PaymentMst> PaymentMsts { get; set; } = null!;
        public virtual DbSet<ProductMst> ProductMsts { get; set; } = null!;
        public virtual DbSet<UserMst> UserMsts { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=LAPTOP-52GN5BJJ\\SQLEXPRESS;Database=FoodSystem;Trusted_Connection=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContactMst>(entity =>
            {
                entity.HasKey(e => e.FullName);

                entity.ToTable("ContactMst");

                entity.Property(e => e.FullName).HasMaxLength(256);

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Message).HasMaxLength(250);
            });

            modelBuilder.Entity<OrderMst>(entity =>
            {
                entity.HasKey(e => e.Oid);

                entity.ToTable("OrderMst");

                entity.Property(e => e.Oid).HasColumnName("OID");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Pname)
                    .HasMaxLength(50)
                    .HasColumnName("PName");

                entity.Property(e => e.Status).HasMaxLength(50);
            });

            modelBuilder.Entity<PaymentMst>(entity =>
            {
                entity.HasKey(e => e.Pid);

                entity.ToTable("PaymentMst");

                entity.Property(e => e.Pid).HasColumnName("PID");

                entity.Property(e => e.BankName).HasMaxLength(50);

                entity.Property(e => e.CardNo).HasMaxLength(50);

                entity.Property(e => e.Cvv)
                    .HasMaxLength(50)
                    .HasColumnName("CVV");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Expiry)
                    .HasMaxLength(50)
                    .HasColumnName("EXPIRY")
                    .IsFixedLength();

                entity.Property(e => e.Nameoncard)
                    .HasMaxLength(50)
                    .HasColumnName("NAMEONCARD")
                    .IsFixedLength();

                entity.Property(e => e.Type).HasMaxLength(50);

                entity.Property(e => e.Upi)
                    .HasMaxLength(50)
                    .HasColumnName("UPI");
            });

            modelBuilder.Entity<ProductMst>(entity =>
            {
                entity.HasKey(e => e.Pid);

                entity.ToTable("ProductMst");

                entity.Property(e => e.Pid).HasColumnName("PID");

                entity.Property(e => e.ImageName).HasMaxLength(50);

                entity.Property(e => e.Pname)
                    .HasMaxLength(50)
                    .HasColumnName("PName");
            });

            modelBuilder.Entity<UserMst>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK_UserMst_1");

                entity.ToTable("UserMst");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.City).HasMaxLength(50);

                entity.Property(e => e.Fname).HasMaxLength(50);

                entity.Property(e => e.Gender).HasMaxLength(50);

                entity.Property(e => e.Lname).HasMaxLength(50);

                entity.Property(e => e.Mobile).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.Pincode).HasMaxLength(50);

                entity.Property(e => e.Uid)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("UID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
