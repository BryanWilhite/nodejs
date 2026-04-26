#:package SonghayCore@*

using Songhay.Extensions;

if (args.Length > 0)
    Console.WriteLine($"Hello {args[0].ToBlogSlug()}!");
else
    Console.WriteLine("Hello world!");