# yo Office Excel Add-In

This sample is a brave attempt to get a humble Office Add-In built and working for Excel Online and the Windows desktop.

## 2018-09-27

My gained experience with Angular suggests strongly to me that it is too “big” for an Office Add-In. Simultaneously, it appears that the yo Office team has removed Vue JS support by default:

```console
==========================================================================

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the Office  │
    |--(o)--|    │   Add-in generator, by   │
   `---------´   │ @OfficeDev! Let's create │
    ( _´U`_ )    │    a project together!   │
    /___A___\   /╰──────────────────────────╯
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Choose a project type: (Use arrow keys)
> Office Add-in project using Angular framework
  Excel Custom Functions Add-in project (Preview: Requires the Insider channel for Excel)
  Office Add-in project using Jquery framework
  Office Add-in containing the manifest only
  Office Add-in project using React framework
```

As of this writing, `my-add-in-angular` and `my-add-in-vue-js` will be removed and possibly in future the building of a functioning React sample will be attempted.

## 2018-03-29

I was unable to get the Angular and Vue add-ins working. The issue might be related to trying to connect to `localhost` and HTTPS/port issues. In addition to these concerns, I am concerned that the debugging experience might be impossible with these JavaScript-based add-ins [without Visual Studio](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/create-and-debug-office-add-ins-in-visual-studio).

## related links

* “[Build an Excel add-in using React](https://docs.microsoft.com/en-us/office/dev/add-ins/quickstarts/excel-quickstart-react)”
* “[Sideload Office Add-ins for testing](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins)”

@[BryanWilhite](https://twitter.com/bryanwilhite)