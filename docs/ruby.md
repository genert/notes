---
title: Ruby
description: Ruby
---

# Ruby

## Requirements

Install [Ruby](https://www.ruby-lang.org/en/).

## History

Yukihiro Matsumoto created Ruby in 1993. As a language, Ruby is interpreted, object-oriented, dynamically typed language from a family of so-called scripting languages. Interpreted means that types are bound at execution time rather than compile time. Object-oriented means the language supports encapsulation, inheritance through classes, and polymorphism.

## Programming model

Ruby is a pure object-oriented language.

Let's look at some basic objects:

```shell
irb(main):001:0> 4
=> 4
irb(main):002:0> 4.class
=> Integer
irb(main):003:0> 4 + 4
=> 8
irb(main):004:0> 4.methods
=> [:-@, :**, :<=>, :upto, :<<, :<=, :>=, :==, :chr, :===, :>>, :[], :%, :&, :inspect, :*, :+, :ord, :-, :/, :size, :succ, :<, :>, :to_int, :coerce, :to_s, :to_i, :to_f, :divmod, :to_r, :fdiv, :modulo, :remainder, :abs, :magnitude, :integer?, :floor, :ceil, :round, :truncate, :^, :odd?, :even?, :allbits?, :anybits?, :nobits?, :downto, :times, :pred, :pow, :bit_length, :digits, :lcm, :gcdlcm, :gcd, :numerator, :denominator, :rationalize, :next, :div, :|, :~, :+@, :eql?, :singleton_method_added, :i, :real?, :zero?, :nonzero?, :finite?, :infinite?, :step, :positive?, :negative?, :arg, :clone, :dup, :rect, :real, :imaginary, :imag, :abs2, :angle, :phase, :conjugate, :rectangular, :to_c, :polar, :conj, :quo, :between?, :clamp, :instance_variable_defined?, :remove_instance_variable, :instance_of?, :kind_of?, :is_a?, :tap, :instance_variable_get, :instance_variable_set, :instance_variables, :singleton_method, :method, :public_send, :define_singleton_method, :public_method, :extend, :to_enum, :enum_for, :=~, :!~, :respond_to?, :freeze, :object_id, :send, :display, :nil?, :hash, :class, :singleton_class, :itself, :yield_self, :then, :taint, :tainted?, :untaint, :untrust, :untrusted?, :trust, :frozen?, :methods, :singleton_methods, :protected_methods, :private_methods, :public_methods, :equal?, :!, :__id__, :instance_exec, :!=, :instance_eval, :__send__]
```

**Everything in Ruby is an object**. A numbr is a an object that has a class caled _Integer_, and the method called _methods_ returns an array of methods.

## Decisions

Programs exist to make decisions, so it stands to reason that the way a language makes decisions is a central concept that shapes the way you code, and think, in a given language. Ruby is like most object-oriented and procedural languages:

```shell
irb(main):001:0> x = 4
=> 4
irb(main):002:0> x < 5
=> true
irb(main):003:0> x <= 4
=> true
irb(main):004:0> x > 4
=> false
irb(main):005:0> false.class
=> FalseClass
irb(main):006:0> true.class
=> TrueClass
```

Ruby has expressions that evaluate to _true_ or _false_. You can conditionally execute code with them:

```shell
irb(main):001:0> x = 4
=> 4
irb(main):002:0> puts "This appears to be false." unless x == 4
=> nil
irb(main):003:0> puts "This appears to be true." if x == 4
This appears to be true.
=> nil
irb(main):004:0> if x == 4
irb(main):005:1>    puts "This appears to be true."
irb(main):006:1> end
This appears to be true.
=> nil
irb(main):007:0> unless x == 4
irb(main):008:1>    puts "This appears to be false."
irb(main):009:1> else
irb(main):010:1>    puts "This appears to be true."
irb(main):011:1> end
This appears to be true.
=> nil
irb(main):012:0> put "This appears to be true." if not true
=> nil
irb(main):013:0> puts "This appears to be true." if !true
=> nil
```

The design choice for conditionals is simple as you can use both block forms (if condition) or one-line forms. With latter you can express a single though in a line of code:

```ruby
order.calculate_tax unless order.nil?
```

Logical operators work like they do in C, C++, C#, and Java with a few minor exceptions.

## Duck Typing

The first thing you need to know is how much protection Ruby will give you when you make a mistake with types. We're talking about type safety. Stongly typed languages check types for certain operations and check the types before you can do any damage:

```shell
irb(main):001:0> 4 + "four"
Traceback (most recent call last):
        5: from /usr/bin/irb:23:in `<main>'
        4: from /usr/bin/irb:23:in `load'
        3: from /Library/Ruby/Gems/2.6.0/gems/irb-1.0.0/exe/irb:11:in `<top (required)>'
        2: from (irb):1
        1: from (irb):1:in `+'
TypeError (String can't be coerced into Integer)
irb(main):002:0> 4.class
=> Integer
irb(main):003:0> (4.0).class
=> Float
irb(main):004:0> 4 + 4.0
=> 8.0
```

Ruby behaves like a strongly typed language most of time, meaning you will get an error when types collide. Ruby makes type checks at runtime, not compile time. It is important to knw that Ruby does not do any type checking until you actually try to execude code. This concept is called _dynamic typing_.

While _dynamic typing_ has trade-offs, it does provide several advantages. For example, classes don't have to inherit from the same parent to be used in the same way:

```shell
irb(main):001:0> i = 0
=> 0
irb(main):002:0> a = ["100.0", 100.0]
=> ["100.0", 100.0]
irb(main):003:0> while i < 2
irb(main):004:1>    puts a[i].to_i
irb(main):005:1>    i = i + 1
irb(main):006:1> end
100
100
=> nil
```

This is duck typing in action. The first element of the array is a _String_, and the second is a _Float_. The same code converts each to an integer via _to_i_. Duck typing doesn't are what the underyling type might be. If it walks like a duck and quacks like a duck, it is a duck. In this case, the _quack_ method is _to_i_.

If you think about, then duck type is great example of "interfaces philosophy" where you should code interfaces rather than implementation. If an object has *push* and *pop* methods, you can treat it like a stack. If it doesn't, you can't.