using BattleBus.Interfaces;
using BattleBus.Model;
using Microsoft.AspNetCore.Mvc;

namespace BattleBus.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class GameController : ControllerBase
    {
        public static readonly object LockObject = new object();
        public static readonly object LockGameObject = new object();
        IGameService _gameService;
        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [HttpGet(Name = "GetLeaderboard")]
        public IEnumerable<UserPoint> GetLeaderboard()
        {
            lock (LockObject)
            {
                return _gameService.GetLeaderBoard().ToArray();
            }
        }

        [HttpPost(Name = "CreateGame")]
        public void CreateGame(string userName)
        {
            lock (LockGameObject)
            {
                _gameService.CreateGame(userName);
            }
        }

        [HttpPost(Name = "JoinGame")]
        public void JoinGame(string userName)
        {
            lock (LockGameObject)
            {
                _gameService.JoinGame(userName);
            }
        }

        [HttpPost(Name = "StartGame")]
        public void StartGame()
        {
            lock (LockGameObject)
            {
                _gameService.StartGame();
            }
        }

        [HttpPost(Name = "GameResult")]
        public void GameResult(string userName, int gameResult)
        {
            lock (LockGameObject)
            {
                _gameService.GameResult(userName, gameResult);
            }
        }

        [HttpGet(Name = "IsGameAvailable")]
        public bool IsGameAvailable()
        {
            lock (LockGameObject)
            {
                return _gameService.IsGameAvailable();
            }
        }

        [HttpGet(Name = "IsGameStarted")]
        public bool IsGameStarted()
        {
            lock (LockGameObject)
            {
                return _gameService.IsGameStarted();
            }
        }

        [HttpGet(Name = "IsGameFinished")]
        public User? IsGameFinished()
        {
            lock (LockGameObject)
            {
                return _gameService.IsGameFinished();
            }
        }
    }
}
