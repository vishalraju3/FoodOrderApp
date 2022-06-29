// See https://aka.ms/new-console-template for more information

using OnlineFoodOrder;
using System;

namespace OnlineFoodOrder;

class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Welcome to Online Food Order Application");
        try
        {
            switch (args[0].ToLower())
            {
                case "products":
                    new ProductCommand().ExecuteCommand(args);
                    break;
                case "users":
                    new UserCommand().ExecuteCommand(args);
                    break;
                case "payments":
                    new PaymentCommand().ExecuteCommand(args);
                    break;
                case "Orders":
                    new OrderCommand().ExecuteCommand(args);
                    break;

                default:
                    Console.WriteLine("Invalid Command");
                    break;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error in System:"+ex.Message);
        }
        Console.ReadKey();
    }
}