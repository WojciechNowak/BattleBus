using BattleBus.Model;

namespace BattleBus.Interfaces
{
    public interface IGameService
    {
        List<UserPoint> GetLeaderBoard();
        void CreateGame(string userName);
        void JoinGame(string userName);
        void StartGame();
        void GameResult(string userName, int result);
        List<User> WhoIsInGame();
        bool IsGameAvailable();
        bool IsGameStarted();
        User? IsGameFinished();
    }
}
