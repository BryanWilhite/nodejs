if (args.Length > 0)
{
    switch (args[0])
    {
        case "do_err":
            TextWriter errorWriter = Console.Error;

            errorWriter.WriteLine("Doing error!");

            return -1;

        default:
            Console.WriteLine($"Hello {args[0]}!");

            return 0;
    }
}
else
    Console.WriteLine("Hello world!");

    return 0;
