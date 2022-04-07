namespace BattleBus.Interfaces
{
    public interface IPassengerInfoService
    {
        List<string> GetPassengers();
        void Add(string name);
        void Remove(string name);
    }
}
