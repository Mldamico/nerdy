using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity;

public class AppIdentityDbContextSeed
{
    public static async Task SeedUserAsync(UserManager<AppUser> userManager)
    {
        if (!userManager.Users.Any())
        {
            var user = new AppUser
            {
                DisplayName = "Test",
                Email = "test@testing.com",
                UserName = "test",
                Address = new Address
                {
                    FirstName = "test",
                    LastName = "testLast",
                    Street = "Test city",
                    City = "Test city",
                    State = "Test state",
                    ZipCode = "77777"
                }
            };
            await userManager.CreateAsync(user, "Pa$$w0rd");
        }
    }
}