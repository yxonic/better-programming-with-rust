Object.assign(window.search, {"doc_urls":["00-preface.html#前言","chap-01/00-index.html#程序的作用","chap-01/00-index.html#用程序解决问题","chap-01/00-index.html#用程序表达思想","chap-01/00-index.html#用程序指导实现","chap-02/00-index.html#从数据开始思考","chap-02/01-data-representation.html#数据的表达","chap-02/02-operation.html#操作数据","chap-02/02-operation.html#变量和作用域","chap-02/02-operation.html#数据变换","chap-02/02-operation.html#状态和赋值","chap-02/03-program-execution.html#理解程序的运行","chap-02/04-data-transfer.html#数据的传递","chap-03/00-index.html#数据管理","chap-04/00-index.html#类型的抽象和设计","chap-05/00-index.html#用程序表达思想","chap-06/00-index.html#用程序编写程序","chap-07/00-index.html#错误的发现和处理","chap-08/00-index.html#程序优化","chap-09/00-index.html#程序组织","chap-10/00-index.html#构建和产出","chap-11/00-index.html#程序的运行环境","chap-12/00-index.html#与其他语言共处","chap-13/00-index.html#重新思考编程"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":0,"title":0},"10":{"body":19,"breadcrumbs":0,"title":0},"11":{"body":0,"breadcrumbs":0,"title":0},"12":{"body":0,"breadcrumbs":0,"title":0},"13":{"body":0,"breadcrumbs":0,"title":0},"14":{"body":0,"breadcrumbs":0,"title":0},"15":{"body":0,"breadcrumbs":0,"title":0},"16":{"body":0,"breadcrumbs":0,"title":0},"17":{"body":0,"breadcrumbs":0,"title":0},"18":{"body":0,"breadcrumbs":0,"title":0},"19":{"body":0,"breadcrumbs":0,"title":0},"2":{"body":0,"breadcrumbs":0,"title":0},"20":{"body":0,"breadcrumbs":0,"title":0},"21":{"body":0,"breadcrumbs":0,"title":0},"22":{"body":0,"breadcrumbs":0,"title":0},"23":{"body":0,"breadcrumbs":0,"title":0},"3":{"body":0,"breadcrumbs":0,"title":0},"4":{"body":0,"breadcrumbs":0,"title":0},"5":{"body":0,"breadcrumbs":0,"title":0},"6":{"body":80,"breadcrumbs":0,"title":0},"7":{"body":0,"breadcrumbs":0,"title":0},"8":{"body":48,"breadcrumbs":0,"title":0},"9":{"body":34,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"","breadcrumbs":"前言 » 前言","id":"0","title":"前言"},"1":{"body":"","breadcrumbs":"程序的作用 » 程序的作用","id":"1","title":"程序的作用"},"10":{"body":"通过表达式来表达程序逻辑，很多时候你是在建立数据间的映射或转换关系。类比数学上的计算：若算式本身是固定的，那么计算结果也是固定的、不可变的。这对应到计算机中，则意味着每个数据对象都是只读的，我们不断将表达式求出的值放置在新的数据对象里、而不会修改原有的对象。由这种方式构建的数据操作，为程序提供了一个最基本的保障：每个数据对象在它的整个生命周期中，都将不会被修改，这让这些数据操作能够保证一个可控、可预测的结果。 然而计算机的内存本身并不是不可变的。我们可以引入“状态”这一概念来更好地思考内存中的数据对象。相比前面的只读变量（虽然它们不可变，我们仍然沿用变量一词），状态额外增加了写入的操作。具体而言，作为状态的变量将不再是只读的、不可变的，你应当可以给变量写入新的值，直到下次写入前，变量将保持这一值不变。 只读变量和可读写的状态，是内存对象的两种思维模型，也对应了对数据理解和操作的两种思维模式。基于变量的思维模式下，我们只需要思考数据之间的变换关系，这个模型更加简单可控，能够更容易地在脑中推演，但也有一些限制。基于状态的思维模式下，我们能够对状态进行读写，从而表达更复杂的逻辑，但这也引入了更多的复杂性（很多时候会比想象的还要复杂）。更重要的是根据问题的需要选择合适的思维模型。 Rust 利用 mut 表示可写的变量（即状态），用赋值表达式来表达对状态的写入或改变。这是为了能够明确表达你确实需要这种更复杂的思维模型：当你需要在程序中引入一个可变的状态时，你需要通过 mut 明确 提出要求。 fn main() { let a = 3; // a默认是不可变的 let mut b = 4; // 明确b是可变的 b += a; // 通过赋值语句修改b println!(\"{}\", b); // -> 7\n} 【写入操作的复杂性：赋值表达式为什么返回空值】 【赋值表达式的核心作用是修改状态。以 c = a + b 为例具体过程分为几步实现：丢弃原有值，计算新值，将新值移动到变量中。注意和 let c = a + b; 的区别。】 【实际上，数据的传递（不论是复制还是移动），在赋值表达式、函数调用等数据操作中十分重要。正确理解这些操作中发生的数据传递，需要我们明确数据所在的位置、以及程序如何在不同位置间传递数据。】","breadcrumbs":"从数据开始思考 » 操作数据 » 状态和赋值","id":"10","title":"状态和赋值"},"11":{"body":"在进一步讨论数据的位置和数据传递之前，我们需要更加深入地理解程序是如何运行的。我们将看到，程序运行的基本单元是 函数 ，函数的数据在 调用栈 上进行存储和传递。","breadcrumbs":"从数据开始思考 » 理解程序的运行 » 理解程序的运行","id":"11","title":"理解程序的运行"},"12":{"body":"","breadcrumbs":"从数据开始思考 » 数据的传递 » 数据的传递","id":"12","title":"数据的传递"},"13":{"body":"","breadcrumbs":"数据管理 » 数据管理","id":"13","title":"数据管理"},"14":{"body":"","breadcrumbs":"类型的抽象和设计 » 类型的抽象和设计","id":"14","title":"类型的抽象和设计"},"15":{"body":"","breadcrumbs":"用程序表达思想 » 用程序表达思想","id":"15","title":"用程序表达思想"},"16":{"body":"","breadcrumbs":"用程序编写程序 » 用程序编写程序","id":"16","title":"用程序编写程序"},"17":{"body":"","breadcrumbs":"错误的发现和处理 » 错误的发现和处理","id":"17","title":"错误的发现和处理"},"18":{"body":"","breadcrumbs":"程序优化 » 程序优化","id":"18","title":"程序优化"},"19":{"body":"","breadcrumbs":"程序组织 » 程序组织","id":"19","title":"程序组织"},"2":{"body":"下图展示了用数学解决真实问题的一般流程：将真实问题建模为数学问题，解决数学问题，数学问题的解即对应了真实问题的解。运用计算机解决问题的一般流程也很类似：将真实世界表示为数据，对数据实施操作得到所需的数据，最后将这些数据反馈给真实世界。 【图】 程序实际上为这个流程图增加了一个层次： 思维模型 。思维模型是问题的一种简化表达，也是实现的一种简化理解。我们可以把程序中的每个概念都视为一种思维模型。于是，下图对应了用 程序 解决问题的一般流程： 【图】","breadcrumbs":"程序的作用 » 用程序解决问题","id":"2","title":"用程序解决问题"},"20":{"body":"","breadcrumbs":"构建和产出 » 构建和产出","id":"20","title":"构建和产出"},"21":{"body":"","breadcrumbs":"程序的运行环境 » 程序的运行环境","id":"21","title":"程序的运行环境"},"22":{"body":"","breadcrumbs":"与其他语言共处 » 与其他语言共处","id":"22","title":"与其他语言共处"},"23":{"body":"","breadcrumbs":"重新思考编程 » 重新思考编程","id":"23","title":"重新思考编程"},"3":{"body":"","breadcrumbs":"程序的作用 » 用程序表达思想","id":"3","title":"用程序表达思想"},"4":{"body":"","breadcrumbs":"程序的作用 » 用程序指导实现","id":"4","title":"用程序指导实现"},"5":{"body":"好的程序员往往是从数据开始思考整个程序的。这很大程度上因为数据是连接真实世界和计算机世界的桥梁。真实世界中的不论是事物、还是概念，即便用再精确的语言描述，也不是计算机能够直接理解的。只有将它们表达为具体的数据，它们才真正在计算机世界中被赋予含义。这样一来，数据也同时成为程序的根基：程序所想要记录和传达的所有逻辑，都将被具体表达为对数据的一系列操作。 所有的数据在计算机中，本质上都是以二进制的形式存在的。如何将事物或概念用二进制数据表达，是整个编程过程的万里长城第一步。","breadcrumbs":"从数据开始思考 » 从数据开始思考","id":"5","title":"从数据开始思考"},"6":{"body":"为了能够在计算机中表达一个确定的事物或概念，我们需要一段具有特定含义的二进制数据。我们要规定数据的读写方式，让它接近、模拟、还原我们想要表达的概念，直到我们能够在思维上认定这段数据代表了这个概念，在数据上产生的结论也能还原到真实世界中。 现实的概念表达为数据，最简单也是最直观的例子是数，但这个例子中包含了关于数据的常见考虑，从而能够作为用数据表达概念的良好示范。 整数转换成二进制本身是容易的，你可以将转换的结果作为整数的计算机表示。在此基础上，小数也可以通过科学记数法来记录：用表示整数的方式分别记录有效数字和幂次。然而我们知道，一段数据的长度，在计算机中终究是有限的，能够表达的信息也是有限的，这意味着并不是所有的数都能在计算机中表达。于是，不管你设计怎样的数据表示方式，都是对真实概念的一种近似。数据表达概念的常见思考，就集中在考虑数据有何种需要、从而决定近似（或者说抽象）到何种程度。 我们从整数的数据表示开始考虑：一个常见而有效的表示方法，就是设定几种固定的数据位数，以表示不同的范围的整数，让程序可以根据需要自行选择使用。设定的每种整数都规定了数据的读写方式（占用多少位？如何解读？），因此我们即是设定了几种不同范围的整数类型（对于负整数，计算机中往往采用补码表示，具体原因超过了本书的范围）。实数的表示也类似：我们规定几位用来表示有效数字、几位用来表示幂次，即是设定了不同范围和精度的实数类型（实际的实数表示更加复杂，需要考虑无限大、不存在等情况如何表达，参考 IEEE 754 标准）。我们观察 Rust 中的几种数值类型，来理解每种类型是如何对应不同数据表示规则的： 类型名 占用位数 字节数 数值范围 u8 8 1 0-255 u16 16 2 0-65535 类型是一种思维模型，它连接了我们的思维和计算机的具体实现：在思维层面，数据类型用来表示一类事物，是对真实事物的某种简化的模型；而在实现层面，数据类型规定了计算机如何读写一段二进制数据。和所有思维模型一样，在一定范围内，简化的模型是成立的，我们可以利用这一点更简单地思考问题；而这个成立的范围往往是由实现决定的。在编程时，我们常常需要选择范围合适的思维模型，也需要更加有意识地思考这个范围的边界：能否保证不会超出这个边界？如果超出了该怎么办呢？ 对于数值类型而言，计算的结果超出类型能够表示的范围我们一般称为越界（或者叫溢出）。比如，如果两个 u8 类型的数相加，结果超过了 u8 能够表示的范围，就发生了越界。我们会看到，除了选择更大范围的类型外，越界的处理方式也有很多种。 最简单的处理方式可能是直接禁止超过范围的结果。如果超过类型能够表示的范围，程序直接报错。我们也可以把超过范围的部分忽略，这样也相当于实现了模为 256 的同余加法（比如128+128=0 (mod 256)，正好等于忽略高位的结果）。我们有时也可以认为范围内最大值表示了“最大”这个概念，这样我们可以把过大的结果用范围内能表示的最大值表示（这样 128+128 会得到 u8 类型所能表示的最大值 u8::MAX，即 255）。你可以通过如下方式在 Rust 中指定采用哪种方式： fn main() { // 128u8 means number 128 with type u8 // 128u8 + 128u8 would cause an error assert!(128u8.wrapping_add(128u8) == 0); assert!(128u8.saturating_add(128u8) == u8::MAX);\n} 默认情况下不允许越界看似过于严格，然而，将最简单、最保守、最少假设的情况作为默认情况，能够促使我们对于自己的选择更加有意识（conscious）：每种不同的选择都会在程序中被明确表达，这些选择应当是我们知情的、有意的、主动的选择，如此我们就不会无意识间混淆例外情况和一般情况（比如将两个正数相加得到一个更小的数甚至是负数）；而如果这确实是我们的本意，程序会更加清晰地把这一意图表达出来。我们之后还会在 Rust 中看到很多类似的例子。 我们可以支持更多的数据类型用来表达更复杂的数据，但让数据真正发挥价值的不是提供更多的预先定义的数据类型，而是提供由现有类型组合形成新数据类型的方式。这种组合很接近集合运算，比如我们考虑一种最基本的组合产生新数据类型的方式：结构体（struct），新数据类型能够表达原有几种类型数据的所有可能组合。这很类似集合之间的笛卡尔积。举例而言，我们定义一个新数据类型 Point 如下： struct Point(f64, f64); 那么 Point 类型所能表达的数据集合是两个 f64 表达集合的笛卡尔积，我们即可用它来表示二维空间中的一个点。 对于 struct 类型，Rust 中还提供了几种不同的形式供不同场合使用，但它们的本质是一致的，区别只在于是否为类型本身和类型中的元素命名： // (f64, f64) is a anonymous tuple type\nlet a: (f64, f64);\n// Point is a tuple struct\nstruct Point(f64, f64);\n// NamedPoint is a struct with named fields\nstruct NamedPoint { x: f64, y: f64,\n} 我们还可以组合多个相同类型，类似集合的幂。比如我们想表示一个 \\(N\\) 维向量（对应幂集 \\(\\mathbb{R}^N\\)），在 Rust 中可以写 [f64; N]（N 是固定的）。 这些产生新数据类型的方式，直觉上来看其实都对应着集合的乘积。也许因为这种方式更加直观、或实现上更加容易，这种方式在几乎所有语言中都有体现。然而我们将知道，这并不是唯一可行的组合方式，也不是我们唯一需要的组合方式。实际上，产生新数据类型的方法很大程度决定了一个语言 类型系统 的表达能力。我们将在第 4 章深入探讨类型系统的概念和意义，以及为什么我们需要更强大的表达能力、以及我们能用一个强大的类型系统来干什么。","breadcrumbs":"从数据开始思考 » 数据的表达 » 数据的表达","id":"6","title":"数据的表达"},"7":{"body":"","breadcrumbs":"从数据开始思考 » 操作数据 » 操作数据","id":"7","title":"操作数据"},"8":{"body":"在对数据对象做任何有意义的事情之前，首先都需要一种方式来指定它们。【根据数据在内存中的位置指定。问题：不方便，对数据的操作很多时候不依赖其位置。通过名字指定：引入变量。】 于是，和大多数编程语言一样，在 Rust 中，我们通过 变量 来指代程序中所用到的数据对象：我们可以通过变量名字指定操作对象，通过变量类型明确如何操作。 fn main() { // define new variable with type let a: i32 = 3; // type can be inferred let b = 5; // express an operation with variables let c = a + b; println!(\"a + b = {}\", c);\n} 和数据类型类似，变量在思维层面和实现层面也有着不同作用。基于表达意图的需要，变量应当对应一个事物、一个概念的具体个体。而基于指定数据的需要，变量应当指代固定的数据对象、具有固定的类型。这催生了矛盾：如果程序中出现同一个概念的不同形式，这些不同形式可能对应不同类型，但是想要表达相同含义，那我们是否应当用同一个变量呢？ 现代语言中常见的一种解决方案，是将变量的名字剥离出来，更具体而言，就是保持每个变量指代对象和类型的固定、但允许更加自由地使用变量的名字。由于名字是对于数据对象的一个指代，像代数中的字母、或者自然语言中的代词一样，名字应当是可以重复使用、用来指代不同的数据对象的。这样一来，同一个名字可以对应思维层面的同一个概念，背后却对应着不同的变量，每个变量仍旧保持数据类型的固定。 变量类型固定一般被称为静态类型（statically typed）。【静态类型的好处】 参考： type safety - What is the difference between a strongly typed language and a statically typed language? - Stack Overflow 在允许名字重复使用的情况下，明确每个名字的所指、避免歧义，对程序而言就十分关键了。【作用域】。 我们可以简单地将 let 视为分配新名字的工具。在作用域结束或出现新的同名的 let 之前，分配的名字将始终指代一个具有特定类型的数据对象： fn main() { let a = 3; println!(\"a: {}\", a); // -> 3 let a = \"hello\"; println!(\"a: {}\", a); // -> hello { let a = 5; println!(\"a: {}\", a); // -> 5 } println!(\"a: {}\", a); // -> hello\n}","breadcrumbs":"从数据开始思考 » 操作数据 » 变量和作用域","id":"8","title":"变量和作用域"},"9":{"body":"有了变量，我们可以很方便地表达对数据最基本的操作，即数据变换：通过变量指定输入，通过表达式指定变换规则，将变换结果记为另一个变量。 我们首先考虑最基础的一种数据变换：数值计算。我们将能够计算结果的一段语法结构称为表达式，这里所说的“计算结果”更确切来讲就是对表达式求值。我们事实上已经见过几种比较基本的表达式形式：字面值表达式，算术表达式，以及方法调用。【解释字面值表达式】。算术表达式我们都比较熟悉，和数学上（或计算器上）的形式是一致的。方法调用（或函数调用）的形式也比较好理解，但其具体含义我们后面会深入探讨。【强调它们都可以求值】 除了数值计算类的操作之外，我们可以将一些逻辑操作也理解为数据变换，从而用表达式来表达。将更多的操作视为数据变换常常是很有好处的。我们对比下面三个例子： if num % 2 == 0 { num /= 2;\n} else { num = num * 3 + 1;\n} num = if num % 2 == 0 { num / 2\n} else { num * 3 + 1\n} num = match num % 2 { 0 => num / 2, _ => num * 3 + 1,\n} 【解释：条件判断语句更关注操作细节；条件判断表达式更像是在表达控制流的拆分和聚合；match更侧重直接地表达映射关系，类似数学上的分段函数，支持多个分支（我们后面还会看到 if 和 match 表达式在此理解基础上的进一步发展）。提供几种同等方便的选择，实际上对应不同的侧重、倾向、关注点，敦促我们想清楚我们想传达的到底是什么。】 也许你已经注意到三段程序中花括号和分号的不同使用。事实上，我们可以想象，更复杂的逻辑需要通过表达式的进一步组合实现，我们需要一种“打包”表达式的方式，而花括号和分号正是为了表达式的灵活组合而存在的。直观来讲，花括号组合一系列表达式为一个代码块表达式，代码块表达式的值等于最后一个表达式的值。【内部的表达式之间为什么需要分隔，可以用分号隔开，代码块表达式分号可省略】 分隔符的选择： 【回车作为分隔符，歧义，解决：明确表达式未结束，或自动推断。行内多表达式仍用分号分隔。Rust 采用无歧义的统一的方案：使用分号 明确 表达式已结束】 更严谨的理解需要引入语句的概念。首先，严格而言，花括号所标定的代码块中，包含的是按顺序执行的一系列 语句 （如前面提到过的 let 语句）。而表达式也可以转换为表达式语句放置在花括号中，只要在表达式末尾加分号即可。我们也可以把分号的作用理解为忽略表达式的值。其次，代码块的最后一项可以是一个表达式（不加分号，也不能是另一个代码块），整个代码块表达式的值就等于最后表达式的值。如果最后的表达式加了分号，则最后一个值被忽略，代码块求值得到空类型的空值 ()。总结而言，表达式加分号构成语句，顺序的语句外加花括号再构成表达式，如此嵌套即可实现复杂的逻辑组合。 需要注意的是，代码块同时起到限定名字作用域的作用，这一点我们在前面章节已经讨论过了。 【打包和函数】 【代码块的额外含义，代码块标记，break和continue】 【在没有返回值的表达式中做有意义的事：“状态”和状态的改变。】 【在引入状态之前，考虑是否需要状态，是否可以用 map 解决。举基本例子。更多关于闭包和函数式编程后面再讲。】","breadcrumbs":"从数据开始思考 » 操作数据 » 数据变换","id":"9","title":"数据变换"}},"length":24,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":2,"docs":{"6":{"tf":1.7320508075688772},"9":{"tf":1.7320508075688772}}},"1":{"2":{"8":{"+":{"1":{"2":{"8":{"=":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}},"u":{"8":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{}},"6":{"df":1,"docs":{"6":{"tf":1.0}}},"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.7320508075688772}}},"2":{"5":{"5":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"6":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":2.449489742783178}}},"3":{"df":3,"docs":{"10":{"tf":1.0},"8":{"tf":1.7320508075688772},"9":{"tf":1.7320508075688772}}},"4":{"df":2,"docs":{"10":{"tf":1.0},"6":{"tf":1.0}}},"5":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}},"6":{"5":{"5":{"3":{"5":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"7":{"5":{"4":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"10":{"tf":1.0}}},"8":{"df":1,"docs":{"6":{"tf":1.0}}},"_":{"df":1,"docs":{"9":{"tf":1.0}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"!":{"(":{"1":{"2":{"8":{"df":0,"docs":{},"u":{"8":{".":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"a":{"d":{"d":{"(":{"1":{"2":{"8":{"df":0,"docs":{},"u":{"8":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"a":{"d":{"d":{"(":{"1":{"2":{"8":{"df":0,"docs":{},"u":{"8":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"b":{"df":2,"docs":{"10":{"tf":2.6457513110645907},"8":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"和":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"c":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":2,"docs":{"10":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}},"f":{"6":{"4":{"df":1,"docs":{"6":{"tf":3.1622776601683795}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"n":{"df":3,"docs":{"10":{"tf":1.0},"6":{"tf":1.0},"8":{"tf":1.4142135623730951}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}}}}}},"i":{"3":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":3,"docs":{"10":{"tf":1.0},"6":{"tf":1.0},"8":{"tf":1.4142135623730951}}}},"p":{"df":1,"docs":{"9":{"tf":1.0}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"h":{"b":{"b":{"df":0,"docs":{},"{":{"df":0,"docs":{},"r":{"df":0,"docs":{},"}":{"^":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}}},"n":{"]":{"df":0,"docs":{},"（":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}},"df":1,"docs":{"6":{"tf":1.0}}}}},"df":1,"docs":{"6":{"tf":1.0}},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"8":{"tf":1.0}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":1,"docs":{"9":{"tf":3.4641016151377544}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"f":{"6":{"4":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"a":{"df":1,"docs":{"8":{"tf":2.23606797749979}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"10":{"tf":1.0}}}}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":4,"docs":{"10":{"tf":1.0},"6":{"tf":2.23606797749979},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.6457513110645907}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"6":{"tf":1.4142135623730951},"8":{"tf":2.449489742783178}}}}}},"u":{"1":{"6":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"8":{":":{":":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":2.23606797749979}}},"df":0,"docs":{}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"x":{"df":1,"docs":{"6":{"tf":1.0}}},"y":{"df":1,"docs":{"6":{"tf":1.0}}}}},"breadcrumbs":{"root":{"0":{"df":2,"docs":{"6":{"tf":1.7320508075688772},"9":{"tf":1.7320508075688772}}},"1":{"2":{"8":{"+":{"1":{"2":{"8":{"=":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}},"u":{"8":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{}},"6":{"df":1,"docs":{"6":{"tf":1.0}}},"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.7320508075688772}}},"2":{"5":{"5":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"6":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":2.449489742783178}}},"3":{"df":3,"docs":{"10":{"tf":1.0},"8":{"tf":1.7320508075688772},"9":{"tf":1.7320508075688772}}},"4":{"df":2,"docs":{"10":{"tf":1.0},"6":{"tf":1.0}}},"5":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}},"6":{"5":{"5":{"3":{"5":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"7":{"5":{"4":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"10":{"tf":1.0}}},"8":{"df":1,"docs":{"6":{"tf":1.0}}},"_":{"df":1,"docs":{"9":{"tf":1.0}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"!":{"(":{"1":{"2":{"8":{"df":0,"docs":{},"u":{"8":{".":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"a":{"d":{"d":{"(":{"1":{"2":{"8":{"df":0,"docs":{},"u":{"8":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"a":{"d":{"d":{"(":{"1":{"2":{"8":{"df":0,"docs":{},"u":{"8":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"b":{"df":2,"docs":{"10":{"tf":2.6457513110645907},"8":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"和":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"c":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":2,"docs":{"10":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}},"f":{"6":{"4":{"df":1,"docs":{"6":{"tf":3.1622776601683795}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"n":{"df":3,"docs":{"10":{"tf":1.0},"6":{"tf":1.0},"8":{"tf":1.4142135623730951}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}}}}}},"i":{"3":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":3,"docs":{"10":{"tf":1.0},"6":{"tf":1.0},"8":{"tf":1.4142135623730951}}}},"p":{"df":1,"docs":{"9":{"tf":1.0}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"h":{"b":{"b":{"df":0,"docs":{},"{":{"df":0,"docs":{},"r":{"df":0,"docs":{},"}":{"^":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}}},"n":{"]":{"df":0,"docs":{},"（":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}},"df":1,"docs":{"6":{"tf":1.0}}}}},"df":1,"docs":{"6":{"tf":1.0}},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"8":{"tf":1.0}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":1,"docs":{"9":{"tf":3.4641016151377544}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"f":{"6":{"4":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"n":{"!":{"(":{"\"":{"a":{"df":1,"docs":{"8":{"tf":2.23606797749979}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"10":{"tf":1.0}}}}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":4,"docs":{"10":{"tf":1.0},"6":{"tf":2.23606797749979},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":2.6457513110645907}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"6":{"tf":1.4142135623730951},"8":{"tf":2.449489742783178}}}}}},"u":{"1":{"6":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"8":{":":{":":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":2.23606797749979}}},"df":0,"docs":{}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"x":{"df":1,"docs":{"6":{"tf":1.0}}},"y":{"df":1,"docs":{"6":{"tf":1.0}}}}},"title":{"root":{"df":0,"docs":{}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});