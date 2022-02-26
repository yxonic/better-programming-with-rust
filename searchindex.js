Object.assign(window.search, {"doc_urls":["00-preface.html#前言","chap-01/00-index.html#程序的作用","chap-01/00-index.html#用程序解决问题","chap-01/00-index.html#用程序表达思想","chap-01/00-index.html#用程序管理复杂性","chap-01/00-index.html#用程序创造新事物","chap-02/00-index.html#从数据开始思考","chap-02/01-data-representation.html#数据的表示","chap-02/01-data-representation.html#数据类型","chap-02/01-data-representation.html#类型的范围和边界","chap-02/01-data-representation.html#组合类型","chap-02/02-operation.html#操作数据","chap-02/02-operation.html#变量和作用域","chap-02/02-operation.html#表达式","chap-02/02-operation.html#函数和方法","chap-02/02-operation.html#状态和赋值","chap-02/03-program-execution.html#理解程序的运行","chap-02/03-program-execution.html#函数调用","chap-02/03-program-execution.html#参数局部变量和返回值","chap-02/03-program-execution.html#函数调用栈","chap-02/04-data-transfer.html#数据的传递","chap-02/04-data-transfer.html#函数间的数据传递","chap-02/04-data-transfer.html#借用的生命周期","chap-02/04-data-transfer.html#赋值时的数据传递","chap-02/04-data-transfer.html#所有权","chap-03/00-index.html#数据管理","chap-03/05-design-data-structure.html#设计数据结构","chap-03/05-design-data-structure.html#数据归属","chap-03/05-design-data-structure.html#数据位置","chap-03/05-design-data-structure.html#数据排布","chap-04/00-index.html#类型的抽象和设计","chap-05/00-index.html#用程序表达思想","chap-06/00-index.html#用程序编写程序","chap-07/00-index.html#错误的发现和处理","chap-08/00-index.html#程序优化","chap-09/00-index.html#程序组织","chap-10/00-index.html#构建和产出","chap-11/00-index.html#程序的运行环境","chap-12/00-index.html#与其他语言共处","chap-13/00-index.html#重新思考编程"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":0,"title":0},"10":{"body":36,"breadcrumbs":0,"title":0},"11":{"body":1,"breadcrumbs":0,"title":0},"12":{"body":41,"breadcrumbs":0,"title":0},"13":{"body":32,"breadcrumbs":0,"title":0},"14":{"body":3,"breadcrumbs":0,"title":0},"15":{"body":19,"breadcrumbs":0,"title":0},"16":{"body":0,"breadcrumbs":0,"title":0},"17":{"body":0,"breadcrumbs":0,"title":0},"18":{"body":0,"breadcrumbs":0,"title":0},"19":{"body":0,"breadcrumbs":0,"title":0},"2":{"body":0,"breadcrumbs":0,"title":0},"20":{"body":0,"breadcrumbs":0,"title":0},"21":{"body":2,"breadcrumbs":0,"title":0},"22":{"body":0,"breadcrumbs":0,"title":0},"23":{"body":0,"breadcrumbs":0,"title":0},"24":{"body":1,"breadcrumbs":0,"title":0},"25":{"body":0,"breadcrumbs":0,"title":0},"26":{"body":0,"breadcrumbs":0,"title":0},"27":{"body":0,"breadcrumbs":0,"title":0},"28":{"body":0,"breadcrumbs":0,"title":0},"29":{"body":0,"breadcrumbs":0,"title":0},"3":{"body":0,"breadcrumbs":0,"title":0},"30":{"body":0,"breadcrumbs":0,"title":0},"31":{"body":0,"breadcrumbs":0,"title":0},"32":{"body":0,"breadcrumbs":0,"title":0},"33":{"body":0,"breadcrumbs":0,"title":0},"34":{"body":0,"breadcrumbs":0,"title":0},"35":{"body":0,"breadcrumbs":0,"title":0},"36":{"body":0,"breadcrumbs":0,"title":0},"37":{"body":0,"breadcrumbs":0,"title":0},"38":{"body":0,"breadcrumbs":0,"title":0},"39":{"body":0,"breadcrumbs":0,"title":0},"4":{"body":0,"breadcrumbs":0,"title":0},"5":{"body":0,"breadcrumbs":0,"title":0},"6":{"body":0,"breadcrumbs":0,"title":0},"7":{"body":0,"breadcrumbs":0,"title":0},"8":{"body":53,"breadcrumbs":0,"title":0},"9":{"body":28,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"","breadcrumbs":"前言 » 前言","id":"0","title":"前言"},"1":{"body":"在计算机刚出现的数十年里，计算机很大一部分作用是被用来代替人类繁琐工作，特别是进行复杂的计算。我们需要为计算机如何计算提供绝对准确的描述，计算机才能够准确无误地执行，这些对于过程的确切描述就是计算机程序。时至今日，计算机代替人工的目的虽然仍然存在，但是计算机程序的作用却远不止于此了。如今我们学习如何编写程序，不止是为了让计算机完成我们让它做的事，它的作用比过去更加像一门真正的语言：你运用它与人交流、传达思想、甚至创造事物。","breadcrumbs":"程序的作用 » 程序的作用","id":"1","title":"程序的作用"},"10":{"body":"尽管语言可以提供更多的数据类型，但要能够表示更复杂的数据，仅仅依靠增加一些固定的数据类型是不现实的。于是，程序设计语言一般会提供由现有类型 组合 形成新数据类型的方式，开放了数据表示的可能性，让程序能够表示和处理任意的数据。直观上看，类型的组合方式很接近集合的运算，因此，我们下面通过与集合的类比来理解类型的组合。我们从结构体（struct）这一概念出发，它是一种最基本的组合产生新数据类型的方式：一个新的结构体数据类型，可以用来表示原有几种类型数据的所有可能组合。这在思想上很接近集合之间的笛卡尔积。我们带着这一类比，看一个具体的例子。在 Rust 中，我们定义一个新数据类型 Point 如下： struct Point(f64, f64); 新定义的 Point 类型由两个 f64 类型组合而成，能够用来表示二维空间中的一个点。如果考虑每个类型能够表示的所有数据构成的集合，我们还能注意到，新类型所能表示的所有数据的集合，是两个 f64 能够表示的数据集合的笛卡尔积。 对于结构体类型，Rust 中还提供了几种不同的语法形式供不同场合使用，但它们的本质是一致的，区别只在于是否为类型本身和类型中的元素命名： // (f64, f64) 是一个匿名元组（tuple）\nlet a: (f64, f64);\n// Point 是一个元组结构体（tuple struct）\nstruct Point(f64, f64);\n// NamedPoint 是一个常规的结构体（struct）\n// 常规的结构体中，每个成员（member）都有自己的名称\nstruct NamedPoint { x: f64, y: f64 } 我们还可以组合多个相同类型，类似集合幂集的概念。比如我们想表示一个 \\(N\\) 维向量（对应幂集 \\(\\mathbb{R}^N\\)），在 Rust 中可以写 [f64; N]（N 是固定的）。 这些产生新数据类型的方式，直觉上来看其实都对应着集合的乘积。也许因为这种方式更加直观、或实现上更加容易，这种方式在几乎所有程序设计语言中都有体现。然而我们将知道，这并不是唯一可行的组合方式，更多的组合方式也会提供更强大的表达能力。实际上，组合产生新数据类型的方式，很大程度决定了一个语言 类型系统 的表达能力。我们将在第 4 章深入探讨类型系统的概念和意义，为什么我们需要一个强大的类型系统，以及我们能用一个强大的类型系统来干什么。","breadcrumbs":"从数据开始思考 » 数据的表达 » 组合类型","id":"10","title":"组合类型"},"11":{"body":"计算机中的数据不是一成不变的。对于数据的一系列计算、变换、输出等操作，构成了计算机程序的主干。我们已经知道，数据类型规定了一类数据的表示方式，而对数据的操作，则都是针对一类数据中的具体实例进行的。数据类型的一个具体的实例，我们称为 数据对象 （object）。我们下面就从指定操作的对象开始，理解程序是如何表达对数据的操作的。","breadcrumbs":"从数据开始思考 » 操作数据 » 操作数据","id":"11","title":"操作数据"},"12":{"body":"在对数据对象做任何有意义的事情之前，首先都需要一种方式来指定它们。在 Rust 中，我们通过 变量 来指代程序中所用到的数据对象，每个变量绑定着一个固定的数据类型：这样我们可以通过变量名字指定操作对象，通过变量的类型指定这个对象是如何读取、操作和变化的。我们可以通过 let 语句定义新的变量： fn main() { // 定义变量 a，指定为 i32 类型 let a: i32 = 3; // 很多时候不需要指定类型，语言可以自行推断 let b = 5; // 用变量表达计算 let c = a + b; println!(\"a + b = {}\", c);\n} 和数据类型类似，变量也是一种思维模型，在思维层面和实现层面也有着不同作用。基于表达意图的需要，变量应当对应一个事物、一个概念的具体个体。而基于指定数据的需要，变量应当指代固定的数据对象、具有固定的类型。 如果程序中出现同一个概念的几种不同形式，这些不同形式可能对应不同类型，但是想要表达相同含义，那我们是否应当用同一个变量呢？基于这样的考虑，在 Rust 中，变量的名字是允许重复使用的。更具体而言，每个变量本身指代对象和类型是固定的，但一个名字在不同时间可以对应不同的变量。由于名字是对于数据对象的一个指代，像代数中的字母、或者自然语言中的代词一样，名字应当是可以重复使用、用来指代不同的数据对象的。这样一来，同一个名字可以对应思维层面的同一个概念，背后却对应着不同的变量。而对于变量本身，其类型则是固定的。 变量类型固定一般被称为静态类型（statically typed）。【静态类型的好处】 参考： type safety - What is the difference between a strongly typed language and a statically typed language? - Stack Overflow 允许名字重复使用的前提下，在程序的不同部分，没有歧义地确定每个名字所指代的变量具体是哪个，对程序正确表达意图而言十分关键。关于名字的规则，简单而言有两条：使用 let 语句把名字绑定在变量上；使用代码块临时盖过外部定义的名字绑定。在下面的例子中，我们可以看到这两种规则的体现： fn main() { let a = 3; println!(\"a: {}\", a); // -> 3 let a = \"hello\"; println!(\"a: {}\", a); // -> hello { let a = 5; println!(\"a: {}\", a); // -> 5 } println!(\"a: {}\", a); // -> hello\n}","breadcrumbs":"从数据开始思考 » 操作数据 » 变量和作用域","id":"12","title":"变量和作用域"},"13":{"body":"有了变量，我们可以很方便地表达对数据最基本的操作，即数据变换：通过变量指定输入，通过表达式指定变换规则，将变换结果记为另一个变量。 我们首先考虑最基础的一种数据变换：数值计算。我们将能够计算结果的一段语法结构称为表达式，这里所说的“计算结果”更确切来讲就是对表达式求值。我们事实上已经见过几种比较基本的表达式形式：字面值表达式，算术表达式，以及方法调用。【解释字面值表达式】。算术表达式我们都比较熟悉，和数学上（或计算器上）的形式是一致的。方法调用（或函数调用）的形式也比较好理解，但其具体含义我们后面会深入探讨。【强调它们都可以求值】 除了数值计算类的操作之外，我们可以将一些逻辑操作也理解为数据变换，从而用表达式来表达。将更多的操作视为数据变换常常是很有好处的。我们对比下面三个例子： if num % 2 == 0 { num /= 2;\n} else { num = num * 3 + 1;\n} num = if num % 2 == 0 { num / 2\n} else { num * 3 + 1\n} num = match num % 2 { 0 => num / 2, _ => num * 3 + 1,\n} 【解释：条件判断语句更关注操作细节；条件判断表达式更像是在表达控制流的拆分和聚合；match 更侧重直接地表达映射关系，类似数学上的分段函数，支持多个分支（我们后面还会看到 if 和 match 表达式在此理解基础上的进一步发展）。提供几种同等方便的选择，实际上对应不同的侧重、倾向、关注点，敦促我们想清楚我们想传达的到底是什么。】 也许你已经注意到三段程序中花括号和分号的不同使用。事实上，我们可以想象，更复杂的逻辑需要通过表达式的进一步组合实现，我们需要一种“打包”表达式的方式，而花括号和分号正是为了表达式的灵活组合而存在的。直观来讲，花括号组合一系列表达式为一个代码块表达式，代码块表达式的值等于最后一个表达式的值。【内部的表达式之间为什么需要分隔，可以用分号隔开，代码块表达式分号可省略】 分隔符的选择： 【回车作为分隔符，歧义，解决：明确表达式未结束，或自动推断。行内多表达式仍用分号分隔。Rust 采用无歧义的统一的方案：使用分号 明确 表达式已结束】 更严谨的理解需要引入语句的概念。首先，严格而言，花括号所标定的代码块中，包含的是按顺序执行的一系列 语句 （如前面提到过的 let 语句）。而表达式也可以转换为表达式语句放置在花括号中，只要在表达式末尾加分号即可。我们也可以把分号的作用理解为忽略表达式的值。其次，代码块的最后一项可以是一个表达式（不加分号，也不能是另一个代码块），整个代码块表达式的值就等于最后表达式的值。如果最后的表达式加了分号，则最后一个值被忽略，代码块求值得到空类型的空值 ()。总结而言，表达式加分号构成语句，顺序的语句外加花括号再构成表达式，如此嵌套即可实现复杂的逻辑组合。 需要注意的是，代码块同时起到限定名字作用域的作用，这一点我们在前面章节已经讨论过了。","breadcrumbs":"从数据开始思考 » 操作数据 » 表达式","id":"13","title":"表达式"},"14":{"body":"【打包和函数】 【代码块的额外含义，代码块标记，break 和 continue】 【在没有返回值的表达式中做有意义的事：“状态”和状态的改变。】 【在引入状态之前，考虑是否需要状态，是否可以用 map 解决。举基本例子。更多关于闭包和函数式编程后面再讲。】","breadcrumbs":"从数据开始思考 » 操作数据 » 函数和方法","id":"14","title":"函数和方法"},"15":{"body":"通过表达式来表达程序逻辑，很多时候你是在建立数据间的映射或转换关系。类比数学上的计算：若算式本身是固定的，那么计算结果也是固定的、不可变的。这对应到计算机中，则意味着每个数据对象都是只读的，我们不断将表达式求出的值放置在新的数据对象里、而不会修改原有的对象。由这种方式构建的数据操作，为程序提供了一个最基本的保障：每个数据对象在它的整个生命周期中，都将不会被修改，这让这些数据操作能够保证一个可控、可预测的结果。 然而计算机的内存本身并不是不可变的。我们可以引入“状态”这一概念来更好地思考内存中的数据对象。相比前面的只读变量（虽然它们不可变，我们仍然沿用变量一词），状态额外增加了写入的操作。具体而言，作为状态的变量将不再是只读的、不可变的，你应当可以给变量写入新的值，直到下次写入前，变量将保持这一值不变。 只读变量和可读写的状态，是内存对象的两种思维模型，也对应了对数据理解和操作的两种思维模式。基于变量的思维模式下，我们只需要思考数据之间的变换关系，这个模型更加简单可控，能够更容易地在脑中推演，但也有一些限制。基于状态的思维模式下，我们能够对状态进行读写，从而表达更复杂的逻辑，但这也引入了更多的复杂性（很多时候会比想象的还要复杂）。更重要的是根据问题的需要选择合适的思维模型。 Rust 利用 mut 表示可写的变量（即状态），用赋值表达式来表达对状态的写入或改变。这是为了能够明确表达你确实需要这种更复杂的思维模型：当你需要在程序中引入一个可变的状态时，你需要通过 mut 明确 提出要求。 fn main() { let a = 3; // a默认是不可变的 let mut b = 4; // 明确b是可变的 b += a; // 通过赋值语句修改b println!(\"{}\", b); // -> 7\n} 【写入操作的复杂性：赋值表达式为什么返回空值】 【赋值表达式的核心作用是修改状态。以 c = a + b 为例具体过程分为几步实现：丢弃原有值，计算新值，将新值移动到变量中。注意和 let c = a + b; 的区别。】 【实际上，数据的传递（不论是复制还是移动），在赋值表达式、函数调用等数据操作中十分重要。正确理解这些操作中发生的数据传递，需要我们明确数据所在的位置、以及程序如何在不同位置间传递数据。】","breadcrumbs":"从数据开始思考 » 操作数据 » 状态和赋值","id":"15","title":"状态和赋值"},"16":{"body":"在进一步讨论数据的位置和数据传递之前，我们需要更加深入地理解程序是如何运行的。我们将看到，程序运行的基本单元是 函数 ，函数的数据在 调用栈 上进行存储和传递。","breadcrumbs":"从数据开始思考 » 理解程序的运行 » 理解程序的运行","id":"16","title":"理解程序的运行"},"17":{"body":"","breadcrumbs":"从数据开始思考 » 理解程序的运行 » 函数调用","id":"17","title":"函数调用"},"18":{"body":"","breadcrumbs":"从数据开始思考 » 理解程序的运行 » 参数、局部变量和返回值","id":"18","title":"参数、局部变量和返回值"},"19":{"body":"","breadcrumbs":"从数据开始思考 » 理解程序的运行 » 函数调用栈","id":"19","title":"函数调用栈"},"2":{"body":"我们仍然从程序最本质的作用说起，即用程序来解决问题。 下图展示了用数学解决真实问题的一般流程：将真实问题建模为数学问题，解决数学问题，数学问题的解即对应了真实问题的解。运用计算机解决问题的一般流程也很类似：将真实世界表示为数据，对数据实施操作得到所需的数据，最后将这些数据反馈给真实世界。 【图】 程序实际上为这个流程图增加了一个层次： 思维模型 。思维模型是问题的一种简化表达，也是实现的一种简化理解。我们可以把程序中的每个概念都视为一种思维模型。于是，下图对应了用 程序 解决问题的一般流程： 【图】","breadcrumbs":"程序的作用 » 用程序解决问题","id":"2","title":"用程序解决问题"},"20":{"body":"","breadcrumbs":"从数据开始思考 » 数据的传递 » 数据的传递","id":"20","title":"数据的传递"},"21":{"body":"【数据的传递方式：复制，移动，借用】 【复制：数值函数，copy和clone，overhead分析】 【移动：consume的思维，构建者模式】 【借用：】","breadcrumbs":"从数据开始思考 » 数据的传递 » 函数间的数据传递","id":"21","title":"函数间的数据传递"},"22":{"body":"","breadcrumbs":"从数据开始思考 » 数据的传递 » 借用的生命周期","id":"22","title":"借用的生命周期"},"23":{"body":"【赋值语句的复杂性】","breadcrumbs":"从数据开始思考 » 数据的传递 » 赋值时的数据传递","id":"23","title":"赋值时的数据传递"},"24":{"body":"【swap，take，replace】","breadcrumbs":"从数据开始思考 » 数据的传递 » 所有权","id":"24","title":"所有权"},"25":{"body":"","breadcrumbs":"数据管理 » 数据管理","id":"25","title":"数据管理"},"26":{"body":"","breadcrumbs":"数据管理 » 设计数据结构 » 设计数据结构","id":"26","title":"设计数据结构"},"27":{"body":"","breadcrumbs":"数据管理 » 设计数据结构 » 数据归属","id":"27","title":"数据归属"},"28":{"body":"","breadcrumbs":"数据管理 » 设计数据结构 » 数据位置","id":"28","title":"数据位置"},"29":{"body":"","breadcrumbs":"数据管理 » 设计数据结构 » 数据排布","id":"29","title":"数据排布"},"3":{"body":"对于编写和维护。 对于交流和协作。 对于编译器优化。","breadcrumbs":"程序的作用 » 用程序表达思想","id":"3","title":"用程序表达思想"},"30":{"body":"","breadcrumbs":"类型的抽象和设计 » 类型的抽象和设计","id":"30","title":"类型的抽象和设计"},"31":{"body":"","breadcrumbs":"用程序表达思想 » 用程序表达思想","id":"31","title":"用程序表达思想"},"32":{"body":"","breadcrumbs":"用程序编写程序 » 用程序编写程序","id":"32","title":"用程序编写程序"},"33":{"body":"","breadcrumbs":"错误的发现和处理 » 错误的发现和处理","id":"33","title":"错误的发现和处理"},"34":{"body":"","breadcrumbs":"程序优化 » 程序优化","id":"34","title":"程序优化"},"35":{"body":"","breadcrumbs":"程序组织 » 程序组织","id":"35","title":"程序组织"},"36":{"body":"","breadcrumbs":"构建和产出 » 构建和产出","id":"36","title":"构建和产出"},"37":{"body":"","breadcrumbs":"程序的运行环境 » 程序的运行环境","id":"37","title":"程序的运行环境"},"38":{"body":"","breadcrumbs":"与其他语言共处 » 与其他语言共处","id":"38","title":"与其他语言共处"},"39":{"body":"","breadcrumbs":"重新思考编程 » 重新思考编程","id":"39","title":"重新思考编程"},"4":{"body":"","breadcrumbs":"程序的作用 » 用程序管理复杂性","id":"4","title":"用程序管理复杂性"},"5":{"body":"","breadcrumbs":"程序的作用 » 用程序创造新事物","id":"5","title":"用程序创造新事物"},"6":{"body":"计算机中的一切都是数据，数据也因此是程序的根基。我们可以把数据看成连接真实世界和计算机世界的桥梁。真实世界中的不论是事物、还是概念，即便用再精确的语言描述，也不是计算机能够直接理解的。只有将它们表达为具体的数据，它们才真正在计算机世界中被赋予含义。程序想要理解和表达的事物，都被转化为数据，而程序记录和传达的所有逻辑，也都是对数据的一系列操作。追本溯源，我们还是应当从数据开始理解程序。 所有的数据在计算机中，本质上都是以二进制的形式存在的。于是，如何将事物或概念用二进制数据表达，将是整个编程过程的第一步。","breadcrumbs":"从数据开始思考 » 从数据开始思考","id":"6","title":"从数据开始思考"},"7":{"body":"","breadcrumbs":"从数据开始思考 » 数据的表达 » 数据的表示","id":"7","title":"数据的表示"},"8":{"body":"为了能够在计算机中表示一个确定的事物或概念，我们要规定事物在计算机中的存在方式，规定事物如何表示为数据、数据又如何理解为事物。这也就是规定了数据的读写方式，从而让数据尽可能接近、模拟、还原我们想要表示的概念。这种近似，让我们在编程时，能够在思维层面认定数据代表了这个概念，于是在数据上所做的操作、产生的结论，也都能再次还原到真实世界中，对应真实事物的操作和结论。 将现实的概念表示为数据，最简单也是最直观的例子是数学上的 数 。比如，我们可以将一个整数转换为二进制表示保存在计算机中，也可以将一段二进制数据理解和还原为整数。在此基础上，小数也可以通过科学记数法来记录：我们可以用表示整数的方式分别记录有效数字和幂次。 然而，一段数据的长度，在计算机中是有限的，能够表达的信息也是有限的。这意味着，并不是所有的数都能在计算机中被准确表示。可以说，不管我们设计怎样的数据表示方式，它都将是对真实概念的一种近似，且想要达到越高的近似程度、就必须使用越长的数据。这样一来，计算机中需要用不同的数据表示方式来适应不同场合也就不足为奇了。为了明确程序中的数据对应什么概念、采用哪种程度的近似，我们在程序中往往需要通过 数据类型 来指明和区分数据的不同表示方式。 我们可以通过整数的数据表示，来直观地理解数据类型的意义。我们已经知道，不存在一种表示方法能够表示所有的整数。最简单的近似表示策略是限定一个固定的范围：我们设定一个固定的数据位数，使用这些位来表示一个固定范围内的整数。设定的数据位数越多，能够表示的范围越大，但占用的空间也越大。为了适应不同需要，程序语言往往提供多种预设的范围供程序选择使用，这些不同的范围对应不同的整数 类型 ，也即规定了整数的不同表示方式。实数的表示也是类似的：我们按照科学记数法的原理，规定几位用来表示有效数字、几位用来表示幂次，设定几种不同大小的位数组合，即是规定了不同范围和精度的实数类型。在 Rust 中，语言依照这样的基本思想设置了几种原生的数值类型，并且通过类型的名称指示了数值数据的表示方式和范围。我们可以从下表中更直观地看到每种类型是如何对应不同数据表示规则的： 类型名 占用位数 字节数 数值范围 u8 8 1 0~255 u16 16 2 0~65535 i32 32 4 -2147483648~2147483647 f32 32 4 TODO f64 64 8 TODO 可以观察到 Rust 中有两类整数。非负整数（自然数）在计算机中一般称为无符号（unsigned）整数；若支持负数，则称为有符号整数、或直接称整数（integer）。这也是 Rust 整数类型 u 和 i 前缀的由来。区分这两种整数类型是有意义的，因为他们实际上对应不同的现实概念：无符号整数用来表示计数、长度等概念，这些概念中负数是没有意义的，使用有符号整数不仅浪费了一半的表示范围，还存在无意间使用了没有意义的负数值的风险；而有符号整数则用来表示更一般的整数概念、进行整数上常规的数学计算。混淆两者的使用不仅仅在思想上混淆了两种不同的事物，更容易导致难以预料的逻辑错误发生。实际上，在 Rust 中，不同类型的数值是不能够直接进行比较或计算的： fn main() { let a: i32 = -4; let b: u32 = 128; // 直接计算 a + b 会报错 println!(\"{}\", a + b as i32); // -> 124 let c: i8 = 5; // 直接计算 a + c 也会报错 println!(\"{}\", a + c as i32); // -> 1 } 语法解释： 我们通过 let a: i32 = -4; 语句指定一个类型为 i32、值为 -4 的变量 a。 println! 是一个宏，用于向控制台打印文本。宏的具体定义在很久之后才会提到，你现在只要把宏当作一些方便的工具来使用即可。 对于有符号整数，除了要考虑多少位以外，还需要考虑负数如何表示的问题。具体参考 补码表示 。而实数的表示更加复杂，需要考虑无穷、不存在等情况如何表示，具体细节参考 IEEE 754 标准。","breadcrumbs":"从数据开始思考 » 数据的表达 » 数据类型","id":"8","title":"数据类型"},"9":{"body":"类型实际上是我们遇到的第一种思维模型。抽象来说，类型连接了我们的思维和计算机的具体实现：在思维层面，数据类型用来表示一类事物，是对真实事物的某种简化的模型；而在实现层面，数据类型规定了计算机如何读写一段二进制数据。和所有思维模型一样，在一定范围内，简化的模型是成立的，我们可以利用这一点更简单地思考问题；而这个成立的范围往往是由实现决定的。在编程时，我们常常需要选择范围合适的思维模型，也需要更加有意识地思考这个范围的边界：能否保证不会超出这个边界？如果超出了该怎么办呢？ 对于数值类型和数值计算而言，计算的结果超出类型能够表示的范围，我们一般称为越界。比如，如果两个 u8 类型的数相加，结果超过了 u8 能够表示的范围，就发生了越界。正因为思维模型是一种近似，对于越界这种超过近似能够表示范围的情况，我们是需要谨慎行事的。因此，我们下面介绍几种越界的常见处理方式。 对于两个 u8 类型的数相加越界的情况，最简单的处理方式可能是直接禁止超过范围的结果。如果超过类型能够表示的范围，程序直接报错。这样的方案最为保守。我们也可以把结算结果超过类型范围的高位直接忽略，这个方案一般称为溢出加法。这样也相当于实现了模为 256 的同余加法（比如 128+129=1 (mod 256)，等价于忽略高位的结果），因此也叫模加法。我们有时也可以认为范围内最大值表示了“最大”这个概念，我们会把过大的结果用范围内能表示的最大值表示（这样 128+129 会得到 u8 类型所能表示的最大值 u8::MAX，即 255），这种方案称为饱和加法。在 Rust 中做计算时，你可以通过不同的语法指定使用不同的处理方案： fn main() { let a: u8 = 128; let b: u8 = 129; // 直接计算 a + b 会报错 assert!(a.wrapping_add(b) == 1); assert!(a.saturating_add(b) == u8::MAX);\n} 语法解释： 除了最常规的计算和操作，其余对数据的操作大多是通过 方法 表达的（即 .method() 语法）。数也可以有方法，这里即通过不同名字的方法来指定不同的计算方式。 assert! 是另一个宏，用来验证（或断言）表达式的成立：如果表达式不成立，这一行会报错，程序也会终止；如果表达式成立，则什么都不做。 在加法最简单的形式中，发生越界会直接报错，这实际上意味着默认情况下，数值计算是不允许越界的。这样看似有些严格，然而却是减少程序出错的重要手段。将最简单、最保守的情况作为默认情况，能够保证我们所做的选择是经过思考的，促使我们对于自己的选择更加更加有意识（conscious）：存在多个解决方案时，程序不直接替我们解决问题，如果发生问题，程序应该直接告诉我们，让我们去选择一个需要的解决方案；而如果我们最终选择了某种解决方案，程序中应当能够把我们的选择清晰地表达出来。这样一来，每个选择都会是知情的、有意的、明确的。我们之后还会在 Rust 中看到很多类似的例子。","breadcrumbs":"从数据开始思考 » 数据的表达 » 类型的范围和边界","id":"9","title":"类型的范围和边界"}},"length":40,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"13":{"tf":1.7320508075688772}},"~":{"2":{"5":{"5":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"5":{"5":{"3":{"5":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"1":{"2":{"4":{"df":1,"docs":{"8":{"tf":1.0}}},"8":{"+":{"1":{"2":{"9":{"=":{"1":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}},"9":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"6":{"df":1,"docs":{"8":{"tf":1.0}}},"df":3,"docs":{"13":{"tf":1.7320508075688772},"8":{"tf":1.4142135623730951},"9":{"tf":1.0}}},"2":{"1":{"4":{"7":{"4":{"8":{"3":{"6":{"4":{"8":{"df":0,"docs":{},"~":{"2":{"1":{"4":{"7":{"4":{"8":{"3":{"6":{"4":{"7":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"5":{"df":1,"docs":{"9":{"tf":1.0}}},"6":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":2,"docs":{"13":{"tf":2.449489742783178},"8":{"tf":1.0}}},"3":{"2":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":3,"docs":{"12":{"tf":1.7320508075688772},"13":{"tf":1.7320508075688772},"15":{"tf":1.0}}},"4":{"df":3,"docs":{"10":{"tf":1.0},"15":{"tf":1.0},"8":{"tf":2.23606797749979}}},"5":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"8":{"tf":1.0}}},"6":{"4":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"7":{"5":{"4":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"15":{"tf":1.0}}},"8":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"_":{"df":1,"docs":{"13":{"tf":1.0}}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"!":{"(":{"a":{".":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"a":{"d":{"d":{"(":{"b":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"a":{"d":{"d":{"(":{"b":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"9":{"tf":1.0}}}}}}}},"b":{"df":4,"docs":{"12":{"tf":1.7320508075688772},"15":{"tf":2.6457513110645907},"8":{"tf":1.7320508075688772},"9":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"14":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"df":3,"docs":{"12":{"tf":1.4142135623730951},"15":{"tf":1.4142135623730951},"8":{"tf":1.7320508075688772}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"21":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":1,"docs":{"14":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"和":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"，":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"21":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"df":0,"docs":{},"f":{"3":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"6":{"4":{"df":2,"docs":{"10":{"tf":3.3166247903554},"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":4,"docs":{"12":{"tf":1.4142135623730951},"15":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}}}}}},"i":{"3":{"2":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"8":{"tf":2.449489742783178}}},"df":0,"docs":{}},"8":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":4,"docs":{"12":{"tf":1.4142135623730951},"15":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"p":{"df":1,"docs":{"14":{"tf":1.0}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"h":{"b":{"b":{"df":0,"docs":{},"{":{"df":0,"docs":{},"r":{"df":0,"docs":{},"}":{"^":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}}}},"o":{"d":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}}},"n":{"]":{"df":0,"docs":{},"（":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}},"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}}},"df":1,"docs":{"10":{"tf":1.0}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"13":{"tf":3.4641016151377544}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"f":{"6":{"4":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"10":{"tf":1.7320508075688772}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"a":{"df":1,"docs":{"12":{"tf":2.23606797749979}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"15":{"tf":1.0},"8":{"tf":1.7320508075688772}}}}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":6,"docs":{"10":{"tf":1.7320508075688772},"12":{"tf":1.4142135623730951},"13":{"tf":1.0},"15":{"tf":1.0},"8":{"tf":2.0},"9":{"tf":1.4142135623730951}}}}}},"s":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":2.449489742783178}}}},"df":0,"docs":{}}}},"w":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"，":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"，":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"24":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"12":{"tf":2.0}}}}}},"u":{"1":{"6":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"3":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"8":{":":{":":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":2.449489742783178}}},"df":1,"docs":{"8":{"tf":1.0}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"）":{"df":0,"docs":{},"整":{"df":0,"docs":{},"数":{"df":0,"docs":{},"；":{"df":0,"docs":{},"若":{"df":0,"docs":{},"支":{"df":0,"docs":{},"持":{"df":0,"docs":{},"负":{"df":0,"docs":{},"数":{"df":0,"docs":{},"，":{"df":0,"docs":{},"则":{"df":0,"docs":{},"称":{"df":0,"docs":{},"为":{"df":0,"docs":{},"有":{"df":0,"docs":{},"符":{"df":0,"docs":{},"号":{"df":0,"docs":{},"整":{"df":0,"docs":{},"数":{"df":0,"docs":{},"、":{"df":0,"docs":{},"或":{"df":0,"docs":{},"直":{"df":0,"docs":{},"接":{"df":0,"docs":{},"称":{"df":0,"docs":{},"整":{"df":0,"docs":{},"数":{"df":0,"docs":{},"（":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}},"x":{"df":1,"docs":{"10":{"tf":1.0}}},"y":{"df":1,"docs":{"10":{"tf":1.0}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"13":{"tf":1.7320508075688772}},"~":{"2":{"5":{"5":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"5":{"5":{"3":{"5":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"1":{"2":{"4":{"df":1,"docs":{"8":{"tf":1.0}}},"8":{"+":{"1":{"2":{"9":{"=":{"1":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}},"9":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"6":{"df":1,"docs":{"8":{"tf":1.0}}},"df":3,"docs":{"13":{"tf":1.7320508075688772},"8":{"tf":1.4142135623730951},"9":{"tf":1.0}}},"2":{"1":{"4":{"7":{"4":{"8":{"3":{"6":{"4":{"8":{"df":0,"docs":{},"~":{"2":{"1":{"4":{"7":{"4":{"8":{"3":{"6":{"4":{"7":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"5":{"df":1,"docs":{"9":{"tf":1.0}}},"6":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":2,"docs":{"13":{"tf":2.449489742783178},"8":{"tf":1.0}}},"3":{"2":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":3,"docs":{"12":{"tf":1.7320508075688772},"13":{"tf":1.7320508075688772},"15":{"tf":1.0}}},"4":{"df":3,"docs":{"10":{"tf":1.0},"15":{"tf":1.0},"8":{"tf":2.23606797749979}}},"5":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"8":{"tf":1.0}}},"6":{"4":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"7":{"5":{"4":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"15":{"tf":1.0}}},"8":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"_":{"df":1,"docs":{"13":{"tf":1.0}}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"!":{"(":{"a":{".":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"a":{"d":{"d":{"(":{"b":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"a":{"d":{"d":{"(":{"b":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"9":{"tf":1.0}}}}}}}},"b":{"df":4,"docs":{"12":{"tf":1.7320508075688772},"15":{"tf":2.6457513110645907},"8":{"tf":1.7320508075688772},"9":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"14":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"df":3,"docs":{"12":{"tf":1.4142135623730951},"15":{"tf":1.4142135623730951},"8":{"tf":1.7320508075688772}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"21":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":1,"docs":{"14":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"和":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"，":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"21":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"df":0,"docs":{},"f":{"3":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"6":{"4":{"df":2,"docs":{"10":{"tf":3.3166247903554},"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":4,"docs":{"12":{"tf":1.4142135623730951},"15":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}}}}}},"i":{"3":{"2":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"8":{"tf":2.449489742783178}}},"df":0,"docs":{}},"8":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":4,"docs":{"12":{"tf":1.4142135623730951},"15":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"p":{"df":1,"docs":{"14":{"tf":1.0}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"h":{"b":{"b":{"df":0,"docs":{},"{":{"df":0,"docs":{},"r":{"df":0,"docs":{},"}":{"^":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}}}},"o":{"d":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"15":{"tf":1.7320508075688772}}}}},"n":{"]":{"df":0,"docs":{},"（":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}},"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}}},"df":1,"docs":{"10":{"tf":1.0}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"13":{"tf":3.4641016151377544}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"f":{"6":{"4":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"10":{"tf":1.7320508075688772}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"a":{"df":1,"docs":{"12":{"tf":2.23606797749979}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"15":{"tf":1.0},"8":{"tf":1.7320508075688772}}}}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":6,"docs":{"10":{"tf":1.7320508075688772},"12":{"tf":1.4142135623730951},"13":{"tf":1.0},"15":{"tf":1.0},"8":{"tf":2.0},"9":{"tf":1.4142135623730951}}}}}},"s":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":2.449489742783178}}}},"df":0,"docs":{}}}},"w":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"，":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"，":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"24":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"12":{"tf":2.0}}}}}},"u":{"1":{"6":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"3":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"8":{":":{":":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":2.449489742783178}}},"df":1,"docs":{"8":{"tf":1.0}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"）":{"df":0,"docs":{},"整":{"df":0,"docs":{},"数":{"df":0,"docs":{},"；":{"df":0,"docs":{},"若":{"df":0,"docs":{},"支":{"df":0,"docs":{},"持":{"df":0,"docs":{},"负":{"df":0,"docs":{},"数":{"df":0,"docs":{},"，":{"df":0,"docs":{},"则":{"df":0,"docs":{},"称":{"df":0,"docs":{},"为":{"df":0,"docs":{},"有":{"df":0,"docs":{},"符":{"df":0,"docs":{},"号":{"df":0,"docs":{},"整":{"df":0,"docs":{},"数":{"df":0,"docs":{},"、":{"df":0,"docs":{},"或":{"df":0,"docs":{},"直":{"df":0,"docs":{},"接":{"df":0,"docs":{},"称":{"df":0,"docs":{},"整":{"df":0,"docs":{},"数":{"df":0,"docs":{},"（":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}},"x":{"df":1,"docs":{"10":{"tf":1.0}}},"y":{"df":1,"docs":{"10":{"tf":1.0}}}}},"title":{"root":{"df":0,"docs":{}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});