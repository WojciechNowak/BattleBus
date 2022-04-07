using BattleBus.Model;

namespace BattleBus.Interfaces
{
    public interface IUserService
    {
        List<User> GetUsers();
        User GetUser(string userName);
    }
}
