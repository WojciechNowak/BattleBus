using BattleBus.Interfaces;
using BattleBus.Model;
using System.Text.Json;

namespace BattleBus.Services
{
    public class Game
    {
        public Dictionary<string, int> Result { get; set; } = new Dictionary<string, int>();
        public List<User> Users { get; set; } = new List<User>();
        public bool IsGameCreated { get; set; } = false;
        public bool IsGameStarted { get; set; } = false;
        public bool IsGameFinished { get; set; } = false;
    }

    public class GameService : IGameService
    {
        private List<UserPoint> _leaderboard = new List<UserPoint>();
        private Game _game = new Game();
        private User? _winner = null;
        private IUserService _userService;

        public GameService(IUserService userService)
        {
            var jsonString = File.ReadAllText(@".\Database\leaderboard.json");
            _leaderboard = JsonSerializer.Deserialize<List<UserPoint>>(jsonString)?.OrderByDescending(up => up.Points).ToList() ?? new List<UserPoint>();
            _userService = userService;
        }

        public List<UserPoint> GetLeaderBoard()
        {
            return _leaderboard;
        }

        public void CreateGame(string userName)
        {
            _game.Users = new List<User>() { _userService.GetUser(userName) };
            _game.Result = new Dictionary<string, int>();
            _game.IsGameCreated = true;
            _game.IsGameStarted = false;
            _game.IsGameFinished = false;
            _winner = null;
        }

        public void JoinGame(string userName)
        {
            if (!_game.Users.Any(u => String.Equals(u.UserName, userName, StringComparison.OrdinalIgnoreCase)))
                _game.Users.Add(_userService.GetUser(userName));
        }

        public void StartGame()
        {
            if (_game.Users.Count() >= 1)
            {
                _game.IsGameStarted = true;
            }
        }

        public void GameResult(string userName, int result )
        {
            if (!_game.IsGameFinished)
            {
                _game.Result.Add(userName, result);
                if (_game.Result.Count == _game.Users.Count)
                {
                    _game.IsGameFinished = true;
                    _game.IsGameStarted = false;
                    _winner = _userService.GetUser(_game.Result.OrderByDescending(r => r.Value).First().Key);
                }
            }
        }

        public User? IsGameFinished()
        {
            return _winner;
        }

        public bool IsGameAvailable()
        {
            return _game.IsGameCreated;
        }

        public bool IsGameStarted()
        {
            return _game.IsGameStarted;
        }
    }
}
