Rama Ramakrishnan: Hello and
welcome. Over the next few minutes, I will tell you what exactly happens when you ask
ChatGPT a question. How exactly and specifically does it generate
an answer for you? So let's dive in and find out. The first thing you have
to understand is that ChatGPT is a member
of the GPT family, it stands on the shoulders of many illustrious GPT ancestors. In particular, GPT-3 and GPT-3.5 were seminal creations that led to the creation of ChatGPT. And understanding how GPT-3
and 3.5 are built is very useful in understanding how ChatGPT actually
works under the hood. So we will start with GPT-3. GPT-3 is a mathematical model and for those who are
technically curious it's a deep neural
network model. So it's a mathematical model and it was trained on roughly 30 billion sentences extracted from the Internet
and from various books. And it was trained to
do just one thing. It was trained to
predict the next word in a sentence given
the previous words. So for example, you would
give it the phrase, "the cat sat on the" and
it'll have to predict "mat." You will give it "elementary, my dear," and it has
to predict "Watson." You get the idea.
Now, initially, when you start training GPT-3, it will not do a very good job, so if you give it
the "cat sat on the" it might come back
with a nonsensical next word like "space ship." But over time, as you
train it more and more, it gets really good at finding the next most plausible word for the input sentence fragment. Now, once the training on these billions of
sentences is complete, GPT-3 can do something
very very useful. You give it any sentence, it will take that sentence, and then it will use that
sentence to calculate a table. This table has two
columns, as you can see. The first column,
there is a row in this column for every
word in the dictionary. And the second column
has a bunch of numbers. And the second column tells you, for every word in the
dictionary, roughly what percent of the
time does that word appear after the input
sentence that you fed GPT-3? So in this example, what we
are seeing is that the word "mat" has a 0.2 or
a 20% probability, and what that means
is that the phrase, the "cat sat on the" was followed by the word
"mat" roughly 20% of the time across all
the training data that GPT-3 has seen. Similarly, the word "fridge"
followed the phrase "the cat sat on the" maybe 5% of the time. Now, what can we do
with this table? Well, what you can
immediately do is given any input sentence or any part of an
input sentence, you can just simply autocomplete the next word using this table. You can do it in
many different ways. The first thing you
can do, of course, is that you calculate
the table and then you just take
the most likely word, which in this example happens to be "mat" and you
just output that. But you don't have to pick
only the most likely word. You can actually sample
a word from this table. Because these numbers
are probabilities, you can sort of
imagine reaching into the table and pulling a
word out from this table. And whether you pull
out a word or not depends on how probable it is. And that's what I
mean by sampling. So clearly if you do this
words which are very probable, as in this example "mat" is 20% likely and it's
the most likely, it's probably going
to appear when you do the sampling a
lot of the time. But the word "fridge" is also going to appear
some of the time, though not as often as "mat." So the key idea here
is that words with higher probability will appear more often when you
do this sampling. And by the way, this
is why when you ask ChatGPT a question, and we'll come back to
this later on as well, when you ask ChatGPT a
question and you ask the same question maybe a
couple of minutes later, it might actually give
you different answers. It's because this
sampling is going on under the hood and you
need to understand that. Okay. We have seen how
GPT-3 can generate the next word given
a sentence fragment. Let's see how we can generate paragraphs
from this capability. When you ask ChatGPT a question, this question is
called a prompt. What it'll do is it'll generate the most likely next word or sample a word from the
table as we have seen. So for instance, if you give it the first four letters of the Gettysburg Address, you feed it in,
it comes up with the next word. Let's say the next
word is "years." And then this is the key trick. It takes this word and
then it appends it to the starting sentence so now the starting sentence becomes
"four score and seven years." It's fed back into GPT-3, and we get the next word and then we take this new
word that's been generated, append it to the sentence we fed it with, and generate the next
word and we keep on doing this for awhile until we reach a
stopping condition. So this is how you can generate entire paragraphs of
text from a very small, simple, innocent looking
starting sentence. In short, “repeatedly
generate the next word and feed it back in” is the key approach that's
followed here. Now, why is it called GPT? Well, it stands for Generative Pretrained
Transformer. Generative because, as you saw, it can generate the next word. Pretrained because of the fact it was trained
on all those billions of sentences extracted from the
Internet and from books, and transformer because the particular deep neural
network architecture that it uses under the hood is called the transformer
architecture. You know, you might
be wondering, well, we start with GPT-3. What about its ancestors? GPT and GPT-2? Well, they were all trained
in a very similar “predict the next word” fashion that we saw GPT-3
being trained on, but there are a few
key differences. The first thing was that GPT-3's underlying neural network
was much, much bigger. It is a much more complicated
mathematical model. And it is also trained on much more data. So those
are the key differences. And to the researchers’ surprise
when they built GPT-3, it turned out to have
unanticipated or as some call it, emergent capabilities
that weren't really foreseen with
the folks who built it. Now, particularly of importance
here is that GPT and GPT-2 didn't have
these capabilities even though they were trained
in much the same fashion. Now, GPT-3 can do lots of
very interesting things. You can find numerous
examples online but here are a couple: it is really good at doing continuations of whatever you give it, of
whatever prompt you give it. So for example, here, you
give it a prompt which says "The importance of being
on Twitter, by Jerome K. Jerome, London,
Summer..." and a year, and then the word "it." So this is the prompt
that you feed into GPT-3, and then it comes back
with this response. So everything you see below the horizontal line was
actually generated by GPT-3, and if you take a moment to
read through this thing, you will realize
that it's actually very coherent text as if a human wrote it as if
Jerome K. Jerome wrote it. So it's really good at doing these continuations
and in particular, GPT and GPT-2 were not
as good at doing this. But it can do other very
interesting things as well. So what you can do
is you can actually list a few examples in
the prompt itself and it'll actually learn to
sort of autocomplete the examples or autocomplete the pattern that you've
specified in the prompt. So what you will see here
is a prompt where we have pairs of sentences,
English sentences. There is a poorly
written English sentence followed by a well-written
English sentence. Poorly written, well-written.
And so on and so forth. So for example, the very
first pair that you see is the poor sentences
is "I eated the purple berries" and the
fixed correct sentence is "I ate the purple berries." And similarly for the
other two examples. So you give it these three
examples and then you end with just a poor English input.
And you can see what it is. And you feed this
prompt into GPT-3. It has sort of realized
the sense--the poor/good, poor/good, poor/good
pattern here and it sort of almost cannot help but autocomplete the
good English version of the poor English
input you just fed it. That's what it does.
And strikingly, you will notice that it has
learned to fix the error. So this is an
example of something that is an unanticipated ability and that researchers
did not expect it was able to do this, but it can. Now all this said, it was not very good at
following user instructions. So for instance,
let's say that you make this request to GPT-3: "help me write a short note to introduce myself
to my neighbor." What does it come back with? It will come back with
something like this: "What is a good
introduction to a resume? good introduction to a resume, best
photos of resume introductions." You know, this doesn't
make any sense. It's nonsensical. It does not actually respond to the
specific instruction. It is doing some
strange auto-complete based on their input sentence. Now, why does this happen? Well, apart from figuring
out why it happens, let us also spend a moment to
say that apart from output, that's not very helpful or relevant to your
particular instruction, it may also give you
factually incorrect output or offensive output and there are numerous documented examples
you can find online. So let's go back to why it
produces unhelpful answers. Well, the first thing we have to recall is that it was not explicitly trained to generate good answers to
user instructions. It was only trained to
guess the next word. So perhaps it's not all that
surprising that it can't follow instructions. So
how can we fix this? Well, let's explicitly train
it to follow instructions. And that's in fact exactly what
OpenAI did. They developed an approach to do exactly this
and we'll look at this next. Now, the approach that
OpenAI created to make GPT-3 follow
instructions, led to GPT-3.5. We'll double-click on this exact process in the slides to come. It was a three-step process, the first step was we will get humans to write high-quality
answers to instructions. So OpenAI gathered about 12,500 instruction-answer pairs.
So here is an example. You can ask GPT-3, explain the moon landing to a six-year-old in a few sentences. And GPT-3's answer is: "explain the theory of
gravity to six-year-old." I think you will agree that it actually does not
answer the question. It's just comes up with another instruction which doesn't make sense and then the
human creator answer for the same instruction is: "people went to the
moon in a big rocket, walked around" and
so on and so forth. You'll agree with
me that the human created answer actually tries to answer the instruction as
opposed to GPT-3's answer. So they created 12,500 such instruction and
high-quality answers. And once they did that,
they used this data as training data to train
GPT-3 some more. And for the technically curious, it's a process called
fine-tuning and they used a technique called supervised
learning to do this. Once this was complete, this step was very helpful. "Supervised Fine-Tuning" is
what this process is called and the supervised fine-tuned GPT-3 did much better on instructions. In fact, you'd love to do much more of this supervised
fine-tuning if you can. But there's a small problem. Writing high-quality answers to thousands of instructions
is difficult, labor-intensive,
and very expensive. Is there an easier way? Well, what is easier than writing a good
answer to a question? I think we can all agree that it's much easier to be a critic
than a creator. So in that way,
what we can do is, for a particular question, if we get a set of different answers from
an outside source, it's quite easy for
us humans to rank the answers from sort of most
helpful to least helpful. Right? So this observation
sort of sparks an approach, which is we can feed a
question to GPT-3 and we can have it generate multiple answers to
this single question. And recall, because of the way the sampling works from
the table we saw earlier, getting GPT-3 to generate multiple answers to a question is actually not
that hard at all. It's pretty easy
because of sampling. You get it for free. So we can generate multiple
answers to this question and we will simply
provide the question and these answers to
humans and ask them to rank them from most
useful to least useful. Note that GPT-3 may actually not come up with great answers
to these questions at all. But that's okay because we
only want the ranking from most to least useful.
So this was Step 2. OpenAI collected 33,000
such instructions, fed them to GPT-3, generated multiple
answers to each of those instructions and then had a team of humans rank them from most helpful
to least helpful. Using this data, something called a
"Reward Model" was built, again, using this technique
of supervised learning. This Reward Model can do
something very useful. If you give it an
instruction and an answer, so I'm giving the "explain
the moon landing" instruction along with GPT-3's
original terrible answer, which is "explain the
theory of gravity." If you give an instruction and an answer to
this Reward Model, it can actually give
you a numerical rating, a number which indicates how good that answer is to that
particular instruction. So, in this case, obviously
it's a terrible answer, so it's giving it, let's say 0.02, on a scale of 0-1, maybe it
says 0.02, it's pretty bad. Now, if you give it a
much better answer, perhaps a human-generated answer like the example we saw earlier, clearly it's a wonderful answer so the Reward will
come back and say, give you a much higher number, let's say 0.95, which
is much better. So this is the key thing that
the Reward Model can do. Give it a question and
a potential answer, it will come back and
give you a number which indicates how good
the answer is. So we can use this capability
to improve GPT-3 even further. So what we do is we send
an instruction to GPT-3, we get an answer out, and this answer may or may
not be good, we don't care. And then we feed
both the instruction and GPT-3's answer
to the Reward Model, which in turn gives
you a number, right? A rating of how good that answer is for that
particular instruction. And now this is the key step. We take this number
and then we use this number to nudge GPT-3
in the right direction. And we do it for
thousands of questions. In fact, OpenAI used 31,000 questions for this step.
And this process by which we're nudging GPT-3 in
the right direction using the output of the Reward Model is called "reinforcement
learning." It uses the technique from the field of reinforcement learning. To summarize, this
three-step process is how GPT-3 became GPT-3.5. Human question-answer
pairs written by humans, fine-tune GPT-3, have GPT-3 provide multiple
answers to the same question, have humans rank the answers, not write them but
just rank them, build a Reward Model
with this data, and then use a rating
from the Reward Model and reinforcement learning to
fine-tune GPT-3 even further. Now, by the way, you will hear the phrase "reinforcement
learning from human feedback" pretty
often in the field and now you know why we call it that. "From human feedback"
because we will have humans rank the answers to help us build this Reward
Model and "reinforcement learning" because the
nudging we talked about earlier is done using
reinforcement learning. Okay. So, by the way,
when you are working with ChatGPT, and you may
have done this yourself, you see this little
thumbs up thumbs down sign which you
can click on to indicate how well the answer from ChatGPT answers
your question. You're providing training data for this process,
just so you know. Okay. Now let's see how GPT-3.5 does on the original
prompt that we used, which is "help me
write a short note to introduce myself
to my neighbor." "Hello neighbor, my
name is" so and so. "I recently moved,"
blah blah blah. Wonderful. It's a
really good response. And you'll agree
with me that is just vastly, vastly better than
what GPT-3 could produce. Now that brings us to the
final leg of our journey, which is how do we go
from 3.5 to ChatGPT? Well, the process that was followed by OpenAI was
actually very, very similar to the
three-step process we followed to go from 3 to 3.5, but with one key difference. And that was instead
of just using instruction-answer pairs
or question-answer pairs, they used entire conversations
as the training data. And this make sense
because if you want to build a
conversational bot, ie, a chat bot, you have to use conversations. That's sort of the
raw training data that's needed for that and
so that's what they used. But apart from that, apart from the fact that they used a conversation data set, the process was more
or less the same. First, there was
supervised fine-tuning, then there was a Reward Model, and then there was
reinforcement learning. And that's how ChatGPT
came into being. Now, how well does ChatGPT
do on our original prompt? It actually seems to do an
even better job as you can see compared to even GPT-3.5. But, you know, there is more because ChatGPT was trained on conversations,
you will recall, not just question-answer pairs. So what that means
is that we can ask follow-on questions to
whatever questions we pose and you would have
already seen it from your experience
playing which ChatGPT. You can say, can you make this response a bit more
formal or a bit less formal? And of course, it will oblige. It'll do the right
thing for you. That is ChatGPT and
how it is built. Now a sort of note
of caution here, while ChatGPT is much better than its
predecessors in many ways, it's still prone to many of the same shortcomings in terms of giving responses
that may be harmful, that may not be helpful,
that may be offensive, and so on and so forth, so you
need to be very, very careful. Now the journey continues. We have seen GPT-4 come
out after ChatGPT, there are ChatGPT plug-ins, there are custom instructions,
the list goes on. There's never a dull
moment in this space. So when you see ChatGPT
do amazing things, write poetry, write essays, explain jokes, solve
reasoning problems, write Seinfeld episodes, write code, and so
on and so forth, remember this, this loop of
take the starting question, generate the probability table, pick a word or sample
a word from the table, append it to the
starting question, and do this thing again. This whole loop may
run tens, hundreds, thousands of times before the answer gets
generated for you, so this is really what's
going on under the hood. In the interest of time, we could only sort of scratch the surface of this
very exciting topic. If you're curious,
I invite you to explore the other resources
in the Sloan AI Hub, and you will find that there's a lot more interesting
things that are going on in this very exciting space. Thank you for watching,
and I'm Rama Ramakrishnan.
