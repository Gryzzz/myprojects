using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Recipes.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public string Ingridients { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }
    }
}