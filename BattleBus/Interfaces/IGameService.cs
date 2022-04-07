using BattleBus.Model;

namespace BattleBus.Interfaces
{
    public interface IGameService
    {
        List<UserPoint> GetLeaderBoard();
        void CreateGame(string userName);
        void JoinGame(string userName);
        bool IsGameAvailable();
    }
}
