namespace Recipes.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Recipes.RecipesDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Recipes.RecipesDb context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.allRecipes.AddOrUpdate(
                m => m.Title,
                new Models.Recipe
                {
                    Title = "Cereal",
                    Type = "Happy meal",
                    Ingridients = "Grain, water",
                    Description = "mix and boil",
                    PictureUrl = "https://www.google.com/logos/doodles/2015/lucy-maud-montgomerys-141st-birthday-6360410059964416.3-5721036024709120-ror.gif"
                });

        }
    }
}
