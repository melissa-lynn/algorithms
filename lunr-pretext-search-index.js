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
  "body": " Pseudocode  In the block below, we provide high-level pseudocode for merge sort.  merge sort input: array of integers state change: array of integers sorted into ascending order call merge sort on the first half of the array call merge sort on the second half of the array merge the two halves  Although the high-level pseudocode communicates the basic idea and structure of merge sort, it lacks details that are important for implementing merge sort in a programming language. In particular,   How are the first half and second half of the array passed recursively to merge sort? Do we make copies of these to pass, or do we specify the indices to consider from the array? Note that this will affect the parameters of the merge sort function.    There are no details on how the merge step is performed.     By writing lower-level pseudocode, we can more clearly communicate the implementation details of an algorithm, making it easier to translate into a programming language. Let's look at low-level pseudocode for merge sort. Here, we make a copy of the first half and second half of the array to pass recursively.  merge_sort input: array of integers of length n state change: array of integers sorted into ascending order call merge_sort_helper on array, 0, n-1 return merge_sort_helper input:array of integers of length n, start_index, stop_index state change: sorts the integers from start_index through stop_index into ascending order if start_index \\geq stop_index: return call merge_sort_helper on array, start_index, (start_index+stop_index)\/\/2 call merge_sort_helper on array, (start_index+stop_index)\/\/2 + 1, stop_index new_array is initialized as an empty array i gets start_index j gets (start_index+stop_index)\/\/2 + 1 k gets 0 while i \\leq (start_index+stop_index)\/\/2 and j \\leq stop_index: if array[i] \\leq array[j]: new_array[k] gets array[i] i gets i+1 k gets k+1 else: new_array[k] gets array[j] j gets j+1 k gets k+1 while i \\leq (start_index+stop_index)\/\/2: new_array[k] gets array[i] i gets i+1 k gets k+1 while j \\leq stop_index: new_array[k] gets array[j] j gets j+1 k gets k+1 for k from 0 through stop_index-start_index+1: array[start_index+k] gets new_array[k] return  This highly detailed version of the pseudocode would be very easy to implement in a programming language; it basically translates line by line into code. However, this does have a drawback: the core idea of the algorithm isn't very clear from the detailed pseudocode. In particular, it isn't immediately obvious what the last few while loops are doing. To make the algorithm itself more clear, we offer the following compromise: pseudocode that is detailed enough to be translated into a programming language (with a bit of effort by the programmer), without getting too bogged down in the actual implementation details). The following pseudocode provides an example of this.  merge_sort input: array of integers of length n state change: array of integers sorted into ascending order if the length of the array is 0 or 1: return call merge_sort to sort the first half of array call merge_sort to sort the second half of the array new_array is initialized as an empty array iterate through the first half and second half of the array simultaneously if the current item in the first half is less than the current item in the second half: append the current item from the first half to new_array go to the next item in the first half else: append the current item from the second half to new_array go to the next item in the second half if there are remaining items in the first half of the array: append them to new_array if there are remaining items in the second half of the array: append them to new_array copy new_array into the original array return  This pseudocode most clearly communicates the idea of the algorithm, and provides enough detail to get someone started with implementation. This is the level of pseudocode that we will typically strive for.  "
},
{
  "id": "intro-3-evaluation",
  "level": "1",
  "url": "intro-3-evaluation.html",
  "type": "Section",
  "number": "1.3",
  "title": "Evaluating an Algorithm",
  "body": " Evaluating an Algorithm  Suppose we have two different algorithms for the same task. For example, there are many different algorithms for sorting an array. We've seen merge sort, which sorts an array by sorting the first half and the second half separately, then merging the two sorted halves. Selection sort provides another approach to sorting: we repeatedly find the next smallest item in the array, and move it into the correct position. Here is pseudocode for selection sort.  selection_sort input: array of integers of length n state change: array of integers sorted into ascending order for each position in the array: find the smallest item in the array, at or after the current position swap the item at the current position with the item just found return  We could also propose the following algorithm, random sort, to sort an array.  random_sort input: array of integers of length n state change: array of integers sorted into ascending order while the items in the array are not in order: shuffle the items into a random order return  We now have three different different algorithms for sorting an array, but which one is best? To answer this question, we need some idea of what makes an algorithm good in general, or how to compare two algorithms. When evaluating an algorithm, we typically focus on correctness and efficiency   Correctness   Does the algorithm always give correct results? If not, how often does it give correct results, and how close to correct are the results?    To evaluate the correctness of an algorithm, we typically adopt one of the following two approaches.   Write test cases with expected output, and run an implementation of the algorithm on these test cases to verify that the algorithm produces the expected output. The challenge of this approach is writing test cases that cover all possible situations. If we miss a situation in our test cases, we may think our algorithm is correct when it is not. One of the benefits of this approach is that test cases can be written before the algorithm is written, and test cases can be useful in developing the algorithm itself.    Prove mathematically that the algorithm does what is expected. The benefit of this approach is that if you have a rigorous proof, you can be certain your algorithm is correct. The challenge is that writing and communicating these proofs can be difficult, and in some cases test cases may provide more compelling evidence that an algorithm works as intended.     For sorting algorithms: test cases and proofs of correctness.   Efficiency   What are the resource requirements of the algorithm? In particular, how long does the algorithm take to run ( time efficiency ), and how much memory does the algorithm require ( space efficiency )? We are especially concerned with scalability (how well the algorithm works on very large inputs).    To evaluate the time efficiency of an algorithm with an emphasis on scalability, we could run an implementation of the algorithm on inputs of various sizes, and time how long the algorithm takes to run. However, this approach has significant drawbacks. The time an algorithm takes to run may vary significantly depending on the power of the computer used, or on the programming language used to implement the algorithm. With this approach, to compare the time efficiency of two algorithms, we would need to be sure to implement them in the same programming language and run them on the same computer. It would be preferable to have an approach that measures the time efficiency intrinsic to an algorithm, without depending on a specific language or hardware.  Similarly, to evaluate the space efficiency of an algorithm, we could track the memory usage of the algorithm for inputs of various sizes. Again, this could depend on the programming language used, and the type of memory used could depend on the hardware configuration (for example, if the algorithm fills up the cache). As with time efficiency, we would like to be able to evaluate the space requirements of an algorithm without focusing on a specific implementation.  In order to more universally describe the time and space efficiency of an algorithm, we will use asymptotics. This approach allows us to describe the growth of the time and space requirements of an algorithm as input size increases, in a way that does not depend on a specific implementation of the algorithm. You may have seen this before as the big O of an algorithm.  For sorting algorithms: analysis of time and space efficiency.  "
},
{
  "id": "principle-correctness",
  "level": "2",
  "url": "intro-3-evaluation.html#principle-correctness",
  "type": "Principle",
  "number": "1.3.1",
  "title": "Correctness.",
  "body": " Correctness   Does the algorithm always give correct results? If not, how often does it give correct results, and how close to correct are the results?   "
},
{
  "id": "principle-efficiency",
  "level": "2",
  "url": "intro-3-evaluation.html#principle-efficiency",
  "type": "Principle",
  "number": "1.3.2",
  "title": "Efficiency.",
  "body": " Efficiency   What are the resource requirements of the algorithm? In particular, how long does the algorithm take to run ( time efficiency ), and how much memory does the algorithm require ( space efficiency )? We are especially concerned with scalability (how well the algorithm works on very large inputs).   "
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
  "body": " Formal Definitions  In order to be a useful measure for analyzing the worst case runtime of algorithms, we have come to the following idea for an function being an asymptotic upper bound for a function :   For large enough inputs sizes , is less than or equal to (times some constant).   We translate this idea into a formal mathematical definition with the following.    Let be a function, and let be another function. We say that  is order  , written , if there exist constants and such that for every integer , .  When , we say that is an asymptotic upper bound for  .    TO DO: define theta and omega  "
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
  "body": " Proving       Translating this statement into the formal definition, we need to prove that for functions and , there exist and such that if , then . In other words, if , then .  Based on our previous investigation, there are various choices for and that could work here. One such choice is and .  Now, let's write our formal proof.   We will show that there exist integers and such that if , then .  Let and . Then, if , we have: Thus, we have , proving that            We will prove that there exists integers and such that if , then .  Choose and . Then, for every integer , we have   Thus, we have shown that for all when and , proving that   "
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
  "id": "asymptotics-4-proofs-7",
  "level": "2",
  "url": "asymptotics-4-proofs.html#asymptotics-4-proofs-7",
  "type": "Claim",
  "number": "2.4.2",
  "title": "",
  "body": "      "
},
{
  "id": "asymptotics-4-proofs-8",
  "level": "2",
  "url": "asymptotics-4-proofs.html#asymptotics-4-proofs-8",
  "type": "Proof",
  "number": "2.4.2",
  "title": "",
  "body": " We will prove that there exists integers and such that if , then .  Choose and . Then, for every integer , we have   Thus, we have shown that for all when and , proving that  "
},
{
  "id": "asymptotics-5-not_proofs",
  "level": "1",
  "url": "asymptotics-5-not_proofs.html",
  "type": "Section",
  "number": "2.5",
  "title": "Proving <span class=\"process-math\">\\(T(n)\\)<\/span> is not <span class=\"process-math\">\\(O(f(n))\\)<\/span>",
  "body": " Proving is not  Next, we'll consider how to prove that a function is not order another function . To do this, we'll use negate the definition of order. This definition is repeated below.    Let be a function, and let be another function. We say that  is order  , written , if there exist constants and such that for every integer , .  When , we say that is an asymptotic upper bound for  .    We will negate this definition, rewriting it in a form that will be useful for proofs. Directly from the definition above, we have the following.    is not order if it is not true that there exist constants and such that for every integer , .   This statement is a bit convoluted, so we'll rewrite it to be easier to interpret. Saying that it is not true that there exist constants satisfying a condition is equivalent to saying that for all constants the condition is false . We use this idea to rewrite the definition equivalently as follows.    is not order if for all constants and it is not true that for every integer , .   Now, saying that it is not true that for every integer a condition is true is equivalent to saying there exists some integer such that the condition is false . Rewriting the definition again, we have the following equivalent statement.    is not order if for any constants and there exists some integer such that is false.   Finally, saying that is false is equivalent to saying that . This brings us to the following equivalent definition, which will be useful for proving directly that a function is not order a function .    Let be a function, and let be another function. We say that  is not order  if for every choice of constants and , there exists some integer such that .     Why not a proof by contradiction?   The remainder of this section consists of examples of proving that a function is not order another function .     is not order .     We will show that for any constants and , there exists some integer such that .  Suppose we have constants and . Choose Then , and This shows that there exists such that , proving that is not order .   "
},
{
  "id": "asymptotics-5-not_proofs-3",
  "level": "2",
  "url": "asymptotics-5-not_proofs.html#asymptotics-5-not_proofs-3",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "  Let be a function, and let be another function. We say that  is order  , written , if there exist constants and such that for every integer , .  When , we say that is an asymptotic upper bound for  .   "
},
{
  "id": "def-notbigO",
  "level": "2",
  "url": "asymptotics-5-not_proofs.html#def-notbigO",
  "type": "Definition",
  "number": "2.5.2",
  "title": "",
  "body": "  Let be a function, and let be another function. We say that  is not order  if for every choice of constants and , there exists some integer such that .   "
},
{
  "id": "asymptotics-5-not_proofs-14",
  "level": "2",
  "url": "asymptotics-5-not_proofs.html#asymptotics-5-not_proofs-14",
  "type": "Claim",
  "number": "2.5.3",
  "title": "",
  "body": "   is not order .   "
},
{
  "id": "asymptotics-5-not_proofs-15",
  "level": "2",
  "url": "asymptotics-5-not_proofs.html#asymptotics-5-not_proofs-15",
  "type": "Proof",
  "number": "2.5.1",
  "title": "",
  "body": " We will show that for any constants and , there exists some integer such that .  Suppose we have constants and . Choose Then , and This shows that there exists such that , proving that is not order .  "
},
{
  "id": "asymptotics-6-properties",
  "level": "1",
  "url": "asymptotics-6-properties.html",
  "type": "Section",
  "number": "2.6",
  "title": "Properties",
  "body": " Properties  In this section, we'll introduce and prove some general properties about big O . These properties are useful to determine the asymptotic behavior of functions, without needing to resort to a proof from the definition.  If you've been thinking about asymptotics and practicing your proofs, you've probably already made the following observation: the asymptotic behavior of a polynomial function is determined by the degree of its highest degree term. This is restated in the claim below.    If is a polynomial of degree , then .     needs proof   "
},
{
  "id": "claim-polydeg",
  "level": "2",
  "url": "asymptotics-6-properties.html#claim-polydeg",
  "type": "Claim",
  "number": "2.6.1",
  "title": "",
  "body": "  If is a polynomial of degree , then .   "
},
{
  "id": "asymptotics-6-properties-5",
  "level": "2",
  "url": "asymptotics-6-properties.html#asymptotics-6-properties-5",
  "type": "Proof",
  "number": "2.6.1",
  "title": "",
  "body": " needs proof  "
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
  "id": "sorting-1-selection_sort",
  "level": "1",
  "url": "sorting-1-selection_sort.html",
  "type": "Section",
  "number": "3.1",
  "title": "Selection Sort",
  "body": " Selection Sort  Selection sort works by repeatedly finding the next smallest item in the array, and moving it into the correct position. Here is pseudocode for selection sort.  selection_sort input: array of integers of length n state change: array of integers sorted into ascending order for each position in the array: find the smallest item in the array, at or after the current position swap the item at the current position with the item just found return  "
},
{
  "id": "sorting-2-insertion_sort",
  "level": "1",
  "url": "sorting-2-insertion_sort.html",
  "type": "Section",
  "number": "3.2",
  "title": "Insertion Sort",
  "body": " Insertion Sort  Insertion sort works by sorting the array from the beginning, adding one item at a time by finding its correct position in the sorted portion of the array.  insertion_sort input: array of integers of length n state change: array of integers sorted into ascending order for each position in the array: current is the item at the current position while current is less than the item in the previous position: swap current with that item return  "
},
{
  "id": "sorting-3-bubble_sort",
  "level": "1",
  "url": "sorting-3-bubble_sort.html",
  "type": "Section",
  "number": "3.3",
  "title": "Bubble Sort",
  "body": " Bubble Sort  Bubble sort works by iterating through the array, swapping pairs of items that are out of order. It repeats this iteration until the entire array is in order.  bubble_sort input: array of integers of length n state change: array of integers sorted into ascending order while there was a swap in the previous iteration: for each position in the array: if the next item is less than the current item: swap the current item with the next item return  "
},
{
  "id": "sorting-4-merge_sort",
  "level": "1",
  "url": "sorting-4-merge_sort.html",
  "type": "Section",
  "number": "3.4",
  "title": "Merge Sort",
  "body": " Merge Sort  Merge sort works by dividing the array into its first half and second half, sorting each half, then merging the two halves resulting in a sorted array.  merge_sort input: array of integers of length n state change: array of integers sorted into ascending order if the length of the array is 0 or 1: return call merge_sort to sort the first half of array call merge_sort to sort the second half of the array new_array is initialized as an empty array iterate through the first half and second half of the array simultaneously if the current item in the first half is less than the current item in the second half: append the current item from the first half to new_array go to the next item in the first half else: append the current item from the second half to new_array go to the next item in the second half if there are remaining items in the first half of the array: append them to new_array if there are remaining items in the second half of the array: append them to new_array copy new_array into the original array return  "
},
{
  "id": "sorting-5-quick_sort",
  "level": "1",
  "url": "sorting-5-quick_sort.html",
  "type": "Section",
  "number": "3.5",
  "title": "Quick Sort",
  "body": " Quick Sort  Quick Sort works by choosing an item from the array, called the pivot. The array is reordered so that every item before the pivot is less than the pivot, and every item after the pivot is greater than the pivot. Then, the portion of the array before the pivot is sorted, and the portion of the array after the pivot is sorted, resulting in a sorted array.  quick_sort input: array of integers of length n state change: array of integers sorted into ascending order the pivot is the last item in the array for each position in the array: if the current item is less than the pivot: swap it with the first item that is greater than the pivot swap the pivot with the first item that is greater than the pivot call quick_sort on the portion of the array before the pivot call quick_sort on the portion of the array after the pivot return  "
},
{
  "id": "sorting-6-tree_sort",
  "level": "1",
  "url": "sorting-6-tree_sort.html",
  "type": "Section",
  "number": "3.6",
  "title": "Tree Sort",
  "body": " Tree Sort  Tree sort works by inserting all items in a binary search tree, then performing an in-order traversal of the tree to extract the items in increasing order.  tree_sort input: array of integers of length n state change: array of integers sorted into ascending order tree is an empty binary search tree for each item in the array: insert the item in the tree traversing the tree in order, copy the items back into the array return  "
},
{
  "id": "sorting-7-heap_sort",
  "level": "1",
  "url": "sorting-7-heap_sort.html",
  "type": "Section",
  "number": "3.7",
  "title": "Heap Sort",
  "body": " Heap Sort  Heap sort works by inserting all items in a min-heap, then repeatedly removing the minimum value from the heap to produce the items in increasing order.  heap_sort input: array of integers of length n state change: array of integers sorted into ascending order heap is an min-heap for each item in the array: insert the item in the heap for each position in the array: extract the minimum value from the heap and assign it to the current position in the array return  "
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
