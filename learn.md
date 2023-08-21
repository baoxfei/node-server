# tips

- wirte ,end,send,json
  1. write 和 end 必须成对出现（可以有多个 write但是 一旦write出现 end必须要出现） write和 end 只支持 字符串和 buffer对象 两种类型的数据
  2. end  = write + end 可以传多个对象 String、Array、Buffer对象、对象、json对象

- pool和connection
  1. pool连接是指在一个容器（比如java中的List）中，存着一堆Connection对象。[链接](https://segmentfault.com/q/1010000002589976)
  2. connection 是一个tcp长连接  但是超过了 wait_timeout 就会断开 并且连接数据库是需要一定的延迟 所以才有了 pool