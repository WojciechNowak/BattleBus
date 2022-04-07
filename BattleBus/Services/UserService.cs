using BattleBus.Interfaces;
using BattleBus.Model;
using System.Text.Json;

namespace BattleBus.Services
{
    public class UserService : IUserService
    {
        private List<User> _users = new List<User>();

        public UserService()
        {
            var jsonString = File.ReadAllText(@".\Database\users.json");
            _users = JsonSerializer.Deserialize<List<User>>(jsonString) ?? new List<User>();
        }

        public User GetUser(string userName)
        {
            var user = _users.Find(x => x.UserName == userName);
            if (user != null)
            {
                user = new User { UserName = userName };
                _users.Add(user);
            }
            return user;
        }

        public List<User> GetUsers()
        {
            return _users;
        }
    }
}
