var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "intro-1-algorithm",
  "level": "1",
  "url": "intro-1-algorithm.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is an Algorithm?",
  "body": " What is an Algorithm?  You have probably heard the term \"algorithm\" before, likely in the context of computer programming, problem solving, or artificial intelligence. Algorithms appear in many different places, and in many different forms. However, at the most basic level, an algorithm is just a sequence of steps for completing some task.   An algorithm is a finite sequence of steps that accomplish a task.     With this definition, there are many things that can be considered algorithms - including some outside of computer science altogether! The following are examples of algorithms:   A process for taking a list of numbers, and sorting them into ascending order. This process could be described to another person, or written in a programming language such as Python, C++, or Java.    A recipe for baking chocolate chip cookies. This process could be demonstrated in a cooking TV show, or written out as a list of ingredients and steps.    Instructions for building a bookcase. This process could be described with a sequence of pictures showing how the pieces fit together, or an online video tutorial.   Each of these is a finite sequence of steps accomplishing a task, though they could be communicated quite differently. The algorithm is the process itself, and this process can be described in many different ways.  Of course, in this book we will be focusing on algorithms in the context of computer science. We will consider a variety of problems in computer science and mathematics, and develop algorithms to solve these problems. For each of these algorithms, we will focus on the following:   How does the algorithm work?    How can we effectively communicate the algorithm?    How can we implement the algorithm in a programming language?    How \"good\" is the algorithm?    What strategies can we learn from this algorithm to apply to future problems?   Notice that programming is only one aspect of working with algorithms. In fact, in order to be mostly language-agnostic, this book will leave implementations of most algorithms as exercises for the reader.  "
},
{
  "id": "intro-1-algorithm-2",
  "level": "2",
  "url": "intro-1-algorithm.html#intro-1-algorithm-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algorithm "
},
{
  "id": "intro-2-pseudocode",
  "level": "1",
  "url": "intro-2-pseudocode.html",
  "type": "Section",
  "number": "1.2",
  "title": "Pseudocode",
  "body": " Pseudocode  In the block below, we provide high-level pseudocode for merge sort.  merge sort input: array of integers state change: array of integers sorted into ascending order call merge sort on the first half of the array call merge sort on the second half of the array merge the two halves  Although the high-level pseudocode communicates the basic idea and structure of merge sort, it lacks details that are important for implementing merge sort in a programming language. In particular,   How are the first half and second half of the array passed recursively to merge sort? Do we make copies of these to pass, or do we specify the indices to consider from the array? Note that this will affect the parameters of the merge sort function.    There are no details on how the merge step is performed.     By writing lower-level pseudocode, we can more clearly communicate the implementation details of an algorithm, making it easier to translate into a programming language. Let's look at low-level pseudocode for merge sort. Here, we make a copy of the first half and second half of the array to pass recursively.  merge sort input: array of integers state change: array of integers sorted into ascending order missing  "
},
{
  "id": "intro-3-evaluation",
  "level": "1",
  "url": "intro-3-evaluation.html",
  "type": "Section",
  "number": "1.3",
  "title": "Evaluating an Algorithm",
  "body": " Evaluating an Algorithm  Text of section.  "
},
{
  "id": "asymptotics-1-motivation",
  "level": "1",
  "url": "asymptotics-1-motivation.html",
  "type": "Section",
  "number": "2.1",
  "title": "Title",
  "body": " Title  Text  "
},
{
  "id": "asymptotics-2-formal_defs",
  "level": "1",
  "url": "asymptotics-2-formal_defs.html",
  "type": "Section",
  "number": "2.2",
  "title": "Formal Definitions",
  "body": " Formal Definitions  In order to be a useful measure for analyzing the worst case runtime of algorithms, we have come to the following idea for an function being an asymptotic upper bound for a function :   For large enough inputs sizes , is less than or equal to (times some constant).   We translate this idea into a formal mathematical definition with the following.    Let be a function, and let be another function. We say that  is order  , written , if there exist constants and such that for every integer , .  When , we say that is an asymptotic upper bound for  .    "
},
{
  "id": "asymptotics-2-formal_defs-3",
  "level": "2",
  "url": "asymptotics-2-formal_defs.html#asymptotics-2-formal_defs-3",
  "type": "Insight",
  "number": "2.2.1",
  "title": "",
  "body": " For large enough inputs sizes , is less than or equal to (times some constant).  "
},
{
  "id": "def-bigO",
  "level": "2",
  "url": "asymptotics-2-formal_defs.html#def-bigO",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "  Let be a function, and let be another function. We say that  is order  , written , if there exist constants and such that for every integer , .  When , we say that is an asymptotic upper bound for  .   "
},
{
  "id": "asymptotics-3-intuition",
  "level": "1",
  "url": "asymptotics-3-intuition.html",
  "type": "Section",
  "number": "2.3",
  "title": "Title",
  "body": " Title  Text  "
},
{
  "id": "asymptotics-4-proofs",
  "level": "1",
  "url": "asymptotics-4-proofs.html",
  "type": "Section",
  "number": "2.4",
  "title": "Proving <span class=\"process-math\">\\(T(n)=O(f(n))\\)<\/span>",
  "body": " Proving       Translating this statement into the formal definition, we need to prove that for functions and , there exist and such that if , then . In other words, if , then .  Based on our previous investigation, there are various choices for and that could work here. One such choice is  Now, we are ready to write our formal proof.   We will show that there exist integers and such that if , then .  Let and . Then, if , we have: Thus, we have , proving that    "
},
{
  "id": "asymptotics-4-proofs-2",
  "level": "2",
  "url": "asymptotics-4-proofs.html#asymptotics-4-proofs-2",
  "type": "Claim",
  "number": "2.4.1",
  "title": "",
  "body": "    "
},
{
  "id": "asymptotics-4-proofs-6",
  "level": "2",
  "url": "asymptotics-4-proofs.html#asymptotics-4-proofs-6",
  "type": "Proof",
  "number": "2.4.1",
  "title": "",
  "body": " We will show that there exist integers and such that if , then .  Let and . Then, if , we have: Thus, we have , proving that   "
},
{
  "id": "asymptotics-5-not_proofs",
  "level": "1",
  "url": "asymptotics-5-not_proofs.html",
  "type": "Section",
  "number": "2.5",
  "title": "Proving <span class=\"process-math\">\\(T(n)\\)<\/span> is not <span class=\"process-math\">\\(O(f(n))\\)<\/span>",
  "body": " Proving is not  Text  "
},
{
  "id": "asymptotics-6-properties",
  "level": "1",
  "url": "asymptotics-6-properties.html",
  "type": "Section",
  "number": "2.6",
  "title": "Title",
  "body": " Title  Text  "
},
{
  "id": "asymptotics-7-more_proofs",
  "level": "1",
  "url": "asymptotics-7-more_proofs.html",
  "type": "Section",
  "number": "2.7",
  "title": "Title",
  "body": " Title  Text  "
},
{
  "id": "asymptotics-8-analyzing_algs",
  "level": "1",
  "url": "asymptotics-8-analyzing_algs.html",
  "type": "Section",
  "number": "2.8",
  "title": "Title",
  "body": " Title  Text  "
},
{
  "id": "asymptotics-9-more_analyzing",
  "level": "1",
  "url": "asymptotics-9-more_analyzing.html",
  "type": "Section",
  "number": "2.9",
  "title": "Title",
  "body": " Title  Text  "
},
{
  "id": "asymptotics-10-complexity_classes",
  "level": "1",
  "url": "asymptotics-10-complexity_classes.html",
  "type": "Section",
  "number": "2.10",
  "title": "Title",
  "body": " Title  Text  "
},
{
  "id": "asymptotics-11-master_thm",
  "level": "1",
  "url": "asymptotics-11-master_thm.html",
  "type": "Section",
  "number": "2.11",
  "title": "Title",
  "body": " Title  Text  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
