# Mermaid Support in GitHub

## current version

```mermaid
  info
```

Here is a simple flow chart:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```


```mermaid
graph BT;
    netstandard2[.NET Standard 2.0];
    net6[.NET 6.0];

    1[`SonghayCore`];
    2[`SonghayCore.Newtonsoft`];

    net6-->1;
    netstandard2-->2;
    2-..->|optional addition|1;

    1-->3[`SonghayCore.xUnit`];
    1-->4[`Songhay.DataAccess`];
    1-->5[`Songhay.Feeds`];
    1-->6[`Songhay.Publications`];
    1-->7[`Songhay.Social`];
```
