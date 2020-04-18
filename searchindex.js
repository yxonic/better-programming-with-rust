Object.assign(window.search, {"doc_urls":["0-0-intro.html#前言","1-0-memory.html#内存控制","1-1-layout.html#数据排布","1-2-ownership.html#所有权控制","1-3-borrowing.html#借用规则与打破规则","1-4-concurrency.html#并发中的内存模型","2-0-coding-paradigm.html#编码范式","2-1-functional.html#函数式编程","2-2-enum.html#枚举和模式匹配","2-3-zero-cost.html#零代价抽象","3-0-design.html#设计抽象","3-1-abstraction.html#数据抽象和操作抽象struct-和-trait","3-2-dynamic.html#动态性泛型和多态","4-0-engineering.html#工程组织","4-1-mods.html#模块组织","4-2-crates.html#包和包管理","4-3-tests.html#测试","5-0-metaprogramming.html#元编程","5-1-simplify.html#利用元编程简化编码","5-2-macro.html#宏理解和控制编译行为","5-3-cans-and-cannots.html#元编程的能力与极限"],"index":{"documentStore":{"docInfo":{"0":{"body":50,"breadcrumbs":0,"title":0},"1":{"body":3,"breadcrumbs":0,"title":0},"10":{"body":0,"breadcrumbs":0,"title":0},"11":{"body":0,"breadcrumbs":2,"title":2},"12":{"body":1,"breadcrumbs":0,"title":0},"13":{"body":0,"breadcrumbs":0,"title":0},"14":{"body":0,"breadcrumbs":0,"title":0},"15":{"body":0,"breadcrumbs":0,"title":0},"16":{"body":0,"breadcrumbs":0,"title":0},"17":{"body":0,"breadcrumbs":0,"title":0},"18":{"body":0,"breadcrumbs":0,"title":0},"19":{"body":0,"breadcrumbs":0,"title":0},"2":{"body":0,"breadcrumbs":0,"title":0},"20":{"body":0,"breadcrumbs":0,"title":0},"3":{"body":0,"breadcrumbs":0,"title":0},"4":{"body":0,"breadcrumbs":0,"title":0},"5":{"body":0,"breadcrumbs":0,"title":0},"6":{"body":0,"breadcrumbs":0,"title":0},"7":{"body":0,"breadcrumbs":0,"title":0},"8":{"body":0,"breadcrumbs":0,"title":0},"9":{"body":0,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"当你理解了一门语言的思想，其语法往往是自然而然的。反过来，一门语言最有趣的也正是它的思想。虽说世上不可能有完美的语言，所有语言都要在各种矛盾中权衡而做不到万全，但这不妨碍 rust 有几处思想颇有见地。而其中最广泛存在和影响这门语言的，可能是如下两条： 第一，rust 鼓励甚至强制实现 明确化 （explicitness），即让使用者对他在做的事完全了解和掌控。当今绝大多数语言似乎都营造了一个假象，即你不需要了解一切、不需要熟悉计算机工作原理、不需要熟悉编译机制，也可以编程。这种假象，或者由于语言限制很多、或者由于语言限制太少，这两种截然不同的理由。前者的一个例子是垃圾回收：垃圾回收对于内存管理是有诸多限制的，比如程序员并不能自己决定内存释放的时间，而这使得程序员不需要了解内存的工作机制也能编程，这很多时候是个好的假象，但是也是个很强的限制；而后者的例子是指针，程序员可以使用指针对内存直接操作，指针也可以任意运算，而只要结果正确，很多细节往往容易得过且过，这种假象不一定是语言想要的结果，也未必是好事了。 With great power comes great responsibility. — sudo lecture 实际上，对计算机越多控制，越需要对计算机深入理解，这从本质上就是绕不开的，而 rust 认识到了这一点。Rust 作为系统编程语言，没有试图遮遮掩掩，而是将所有底层细节在语言层面，较以前更为提前、更为明确地暴露出来。举例而言，C 和 C++ 中，一个 struct 的主要数据存储在栈还是堆上，是不能很显然看出来的，本质上也是因为指针就没有对应的区分；但 rust 中栈和堆上的“指针”是有不同的语法语义的，在更高的 struct 层次，数据存储位置也可以很明显地通过 Copy trait 区分。类似这些也导致了 rust 的一个广为人知的特点：很难通过编译，学习成本极高。但这并不是 rust 的劣势，rust 其实并没有平添复杂性，而是把本来的复杂性尽可能早地真实完整地暴露给使用者而已。一方面它打碎了一些不切实际的假象，而另一方面，一旦你写出可以通过编译的 rust 程序，你会对程序拥有前所未有的信心，因为语言虽不能保证你万无一失，但在努力保证你完全清楚你在做的事情。 第二，rust 在不失明确的前提下，利用尽可能强大的 抽象 （abstraction），让使用者不至于迷失在细节当中。抽象而不失细节的最好例子可能是数学，也正是得益于其明确性。相比更加数学化的语言（如 Haskell），rust 借鉴了其中大量抽象思想，但除了对数学化抽象本身对明确性、又增加了对系统的明确性，使得 rust 很好地将高层抽象和底层细节合并起来。这让 rust 成为一个表达力毫不落伍的系统级语言。 值得一提的是，rust 在数学性的抽象（函数等）、和为语法简洁的存在的语言特征（宏）之间，有较为明显的区分，这也是之前不曾有的。甚至在你的第一个“你好，世界”程序里，rust 也会通过 ! 明确告诉你，println! 不是个单纯的函数，而只是一组程序的简洁写法。我们可以认为宏是语言词法层次的抽象：可将一套无法用前述抽象机制实现、但形式上多有繁复的代码片段，抽象为一个新的词法；或者通俗而言，可以就理解为编写代码的代码（即所谓元编程）。这样的区分，使得 rust 能维持精简而专注的抽象内核，同时仍然能提供大量实际便利；另一方面，明确这种区分，也如前文所说，能够不失精细控制、提升对程序对认识和信心。 可以说，这两条是 rust 能作为系统语言存在的前提和优势所在。Rust 程序员第一本教科书（ The Rust Programming Language ）特意提到 rust 的核心价值是 赋能 （empowerment），也正是从这两点中体现：rust 程序员从明确中获得更多信心，从高度抽象中获得处理更复杂事务的能力和更广阔的可能性。当然 rust 远不止于此，诸多设计选择、实现细节、还有很多来自当前时代其他语言的最佳实践中，也都蕴含了许多思想。这些或零或整、或明或暗的思想，这些思想对语言的影响，以及这些思想对于编译器实现会有哪些新的需求，正是本书的主题。虽不敢说完整通透，也至少能管中窥豹、可见一斑。 由于本书的目的是在思想和思维方式的层面讨论 rust，所有的语言细节均是用来体现思想的例子，因此这本书绝不能算是 rust 或系统编程的入门教程，对 rust 的介绍也并不全面和系统。基于此，这本书并不是很适合初学计算机或编程语言的人阅读。第一次接触一个事物，最重要的还是要保持兴趣，和做以前做不到的事。思考、总结、优化往往是后话。 Premature optimization is the root of all evil. （过早优化是万恶之源。） — Donald Knuth Rust 至今仍算是个正在快速发展的语言，谁也无法做到完整掌握，更无法预测未来，对其他语言也如是。作为程序员该如何思考编程本身、如何发展完善自己的思考方式和思维过程，或许比理解语言更为重要，因为这些是不会过时的。这就好比摄影师更需要理解光线和构图，而不是相机的操作细节。这也是写作本书的最大动机了。","breadcrumbs":"前言","id":"0","title":"前言"},"1":{"body":"程序员常常会问自己这样一个问题，如何提高我的程序的性能？有个有点偷懒但很有效的答案，就是寻找当前的 性能瓶颈 并优化它。更具体一点说，性能瓶颈一般在哪呢？第一有可能的瓶颈自然是算法，但第二可能便是内存控制了。 程序 = 算法 + 数据结构 （或者更简单的版本： 程序 = 过程 + 数据 ） 除了性能问题之外，类似的程序员希望对内存有更精细的控制的场合还有很多。但长久以来，系统程序员似乎面临着这样的困境：在现有的语言中，选择了更多更底层的控制，就意味着更容易出错；而选择了安全保障，则意味着更少控制。类似的抉择常常在是否要垃圾回收上体现：选择垃圾回收，你可以获得对内存访问的更多保障，如没有内存泄露问题，也没有悬垂指针、二次释放等广泛存在的内存安全问题，但你也因此无法直接触碰内存、控制内存的排布，无法决定何时回收垃圾，从而失去了一些优化的可能（编译器或虚拟机有时会帮你优化，你也可以通过编码技巧来促进这种优化，但终究比较间接）。 我们不禁要问，底层控制和安全性真的无法同时保障吗？可以明确的事，越接近底层控制，程序员越需要对底层深入了解，面对的状况也越复杂。但复杂性并不直接意味着失去安全性，仅仅是提供安全保障也不意味着削弱控制。也就是说底层控制和安全保障并不是直接冲突的。我们真正需要解决的是复杂性的问题。 泛泛而言，复杂性导致出错不外乎如下几个原因： 对复杂性理解不足； 繁琐的细节中出错； 疲于应付繁琐细节、导致逻辑出错。 解决问题也应该是对症下药，通过明确化来直面复杂性，和通过抽象来解决复杂性。 直面复杂性 ：复杂性越直接暴露，也就越能促使程序员深入了解背后发生了什么。系统编程最为复杂的部分便是内存控制。因而，本章节将介绍内存机制如何在 rust 中显式呈现、不同的内存操作对操作对象有何要求、以及 rust 所提供的不同层次的安全保障和所要付出代价之间的显式权衡，最后以并发编程为例，展示这种明确化的潜在力量。 解决复杂性 ：几乎每一本计算机科学的书都会谈到，解决复杂性最佳方式是抽象，而 rust 的抽象机制将在后续章节中介绍。","breadcrumbs":"内存控制","id":"1","title":"内存控制"},"10":{"body":"","breadcrumbs":"设计抽象","id":"10","title":"设计抽象"},"11":{"body":"","breadcrumbs":"设计抽象 » 数据抽象和操作抽象：struct 和 trait","id":"11","title":"数据抽象和操作抽象：struct 和 trait"},"12":{"body":"http://www.cs.ox.ac.uk/jeremy.gibbons/publications/dgp.pdf","breadcrumbs":"设计抽象 » 动态性：泛型和多态","id":"12","title":"动态性：泛型和多态"},"13":{"body":"","breadcrumbs":"工程组织","id":"13","title":"工程组织"},"14":{"body":"","breadcrumbs":"工程组织 » 模块组织","id":"14","title":"模块组织"},"15":{"body":"","breadcrumbs":"工程组织 » 包和包管理","id":"15","title":"包和包管理"},"16":{"body":"","breadcrumbs":"工程组织 » 测试","id":"16","title":"测试"},"17":{"body":"","breadcrumbs":"元编程","id":"17","title":"元编程"},"18":{"body":"","breadcrumbs":"元编程 » 利用元编程简化编码","id":"18","title":"利用元编程简化编码"},"19":{"body":"","breadcrumbs":"元编程 » 宏：理解和控制编译行为","id":"19","title":"宏：理解和控制编译行为"},"2":{"body":"","breadcrumbs":"内存控制 » 数据排布","id":"2","title":"数据排布"},"20":{"body":"","breadcrumbs":"元编程 » 元编程的能力与极限","id":"20","title":"元编程的能力与极限"},"3":{"body":"","breadcrumbs":"内存控制 » 所有权控制","id":"3","title":"所有权控制"},"4":{"body":"","breadcrumbs":"内存控制 » 借用：规则与打破规则","id":"4","title":"借用：规则与打破规则"},"5":{"body":"","breadcrumbs":"内存控制 » 并发中的内存模型","id":"5","title":"并发中的内存模型"},"6":{"body":"","breadcrumbs":"编码范式","id":"6","title":"编码范式"},"7":{"body":"","breadcrumbs":"编码范式 » 函数式编程","id":"7","title":"函数式编程"},"8":{"body":"","breadcrumbs":"编码范式 » 枚举和模式匹配","id":"8","title":"枚举和模式匹配"},"9":{"body":"","breadcrumbs":"编码范式 » 零代价抽象","id":"9","title":"零代价抽象"}},"length":21,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"）":{"df":0,"docs":{},"，":{"df":0,"docs":{},"也":{"df":0,"docs":{},"正":{"df":0,"docs":{},"是":{"df":0,"docs":{},"从":{"df":0,"docs":{},"这":{"df":0,"docs":{},"两":{"df":0,"docs":{},"点":{"df":0,"docs":{},"中":{"df":0,"docs":{},"体":{"df":0,"docs":{},"现":{"df":0,"docs":{},"：":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"）":{"df":0,"docs":{},"，":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{":":{"/":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"w":{"df":0,"docs":{},"w":{".":{"c":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{".":{"a":{"c":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"k":{"/":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"y":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"b":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"p":{".":{"df":0,"docs":{},"p":{"d":{"df":0,"docs":{},"f":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"k":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":4.898979485566356},"1":{"tf":1.7320508075688772}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"11":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"a":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"）":{"df":0,"docs":{},"，":{"df":0,"docs":{},"也":{"df":0,"docs":{},"正":{"df":0,"docs":{},"是":{"df":0,"docs":{},"从":{"df":0,"docs":{},"这":{"df":0,"docs":{},"两":{"df":0,"docs":{},"点":{"df":0,"docs":{},"中":{"df":0,"docs":{},"体":{"df":0,"docs":{},"现":{"df":0,"docs":{},"：":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"）":{"df":0,"docs":{},"，":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{":":{"/":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"w":{"df":0,"docs":{},"w":{".":{"c":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{".":{"a":{"c":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"k":{"/":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"y":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"b":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"p":{".":{"df":0,"docs":{},"p":{"d":{"df":0,"docs":{},"f":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"k":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":4.898979485566356},"1":{"tf":1.7320508075688772}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"11":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"u":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"11":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}},"title":{"root":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});