using BattleBus.Interfaces;
using BattleBus.Model;
using System.Text.Json;

namespace BattleBus.Services
{
    public class DbService : IDbService
    {
        public List<User> GetUsers()
        {
            var jsonString = File.ReadAllText(@".\Database\users.json");
            List<User>? users = JsonSerializer.Deserialize<List<User>>(jsonString);
            return users ?? new List<User>();
        }
    }
}
