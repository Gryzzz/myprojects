using Recipes.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Recipes
{
    public class RecipesDb : DbContext
    {
        public DbSet<Recipe> allRecipes { get; set; }
    }
}