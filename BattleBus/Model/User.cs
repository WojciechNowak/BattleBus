namespace BattleBus.Model
{
    public enum DiscountVal : uint
    {
        Default = 0,
        Small = 3,
        Medium = 5,
        Large = 10,
    };

    public class User
    {
        public string UserName { get; set; } = string.Empty;
        public string FavouriteGame { get; set; } = string.Empty;
        public uint GameStreak { get; set; } = 0;
        private uint level = 0;
        public uint Level { 
            get { return level; } 
            set
            {
                level = value;
                if (Level > 50)
                    Discount = DiscountVal.Large;
                else if (Level < 50 && Level > 20)
                    Discount = DiscountVal.Medium;
                else if (Level < 20 && Level > 5)
                    Discount = DiscountVal.Small;
                else 
                    Discount = DiscountVal.Default;
            }
        }
        public DiscountVal Discount { get; private set; }
    }
}
