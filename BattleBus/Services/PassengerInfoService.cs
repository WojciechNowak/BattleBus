using BattleBus.Interfaces;

namespace BattleBus.Services
{
    public class PassengerInfoService : IPassengerInfoService
    {
        private List<string> _passengers = new List<string>();

        public List<string> GetPassengers()
        {
            return _passengers;
        }

        public void Add(string name)
        {
            if (!_passengers.Any(passenger => String.Equals(passenger, name, StringComparison.OrdinalIgnoreCase)))
                _passengers.Add(name);
        }

        public void Remove(string name)
        {
            if (_passengers.Any(passenger => String.Equals(passenger, name, StringComparison.OrdinalIgnoreCase)))
                _passengers.Remove(name);
        }
    }
}
