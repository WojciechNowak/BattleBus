using BattleBus.Model;

namespace BattleBus.Interfaces
{
    public interface IDbService
    {
        List<User> GetUsers();
    }
}
