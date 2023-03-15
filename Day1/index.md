why do we need to know system design?

System design is a critical skill for anyone involved in building complex software applications or systems. Here are some reasons why it's important to know system design:

    Scalability: As your application or system grows, you need to be able to scale it to handle more users, data, and traffic. Good system design enables you to scale your application efficiently without sacrificing performance.

    Performance: System design also plays a crucial role in optimizing the performance of your application. By designing a system with good architecture and efficient algorithms, you can improve the performance of your application and reduce its response time.

    Maintainability: A well-designed system is also easier to maintain and update. Good system design allows you to make changes to your system without affecting other parts of the application, which reduces the risk of introducing bugs or breaking existing functionality.

    Robustness: A robust system can handle errors and failures gracefully. By designing a system with fault tolerance and redundancy, you can ensure that your application continues to function even if one or more components fail.

    Cost-effectiveness: Good system design can also help you reduce the cost of developing and maintaining your application. By designing a system that is efficient and scalable, you can reduce the hardware and infrastructure requirements, which can save you money in the long run.

The need for system design arises when we have n number of connections which are not able to be handled by our current cloud.

So what so we do fix that

1. BUY BIGGER MACHINES (COSTLY)
2.  1. BUY MORE MACHINES (COSTLY)

Why do we need to do that?

Simple silly SCALABILITY.

What is that?

We have to make our cloud respond with our requirements so what do we do as we mentioned above we find
First BIGGER MACHINES which is vertical scalability where one server with high computational power handles request.
Second MORE MACHINES which is horizontal scaling where the request can fall on any machine randomly.

when do we need horizontal and vertical scaling?

1. Horizontal machines have a bunch of systems connected which require a load balancer. Whereas when we have a vertical scaling we don't require a load balancer.

A load balancer is a device or software component that distributes incoming network traffic across multiple servers, to ensure that no single server is overwhelmed with too much traffic.

Load balancers are commonly used in web applications, where a large number of users may be accessing the application simultaneously. The load balancer sits between the user and the server, routing requests to the appropriate server based on a set of predefined rules.

Load balancing algorithms vary, but typically they take into account factors such as the current server capacity, response time, and number of active connections. This ensures that the load is distributed evenly across all servers, preventing any single server from being overloaded.

Load balancing can improve the availability and reliability of a web application, as it provides a level of redundancy. If one server goes down, the load balancer can automatically redirect traffic to other servers, ensuring that the application remains available to users.

Overall, load balancers are an essential component of any large-scale web application, helping to improve performance, reliability, and scalability.

2. Horizontal machines are resilient as one machine goes down the requests are redirected to other machines. Whereas vertical machines have single point of failure as one machine serves all.

3. Horizontal machines have Network calls which are remote procedure calls which are knoen as RPCs these are slow. Whereas vertical machines have data on one machine so they can access it using Inter Process Communication which are fast.

4. Horizonatal machines have data consistency issues i.e. if we have an atomic transaction we have to lock all the machines. Vertical machines are consistent as single sytem gets locked.

5. Horizonatal machines have no scaling issues as we can keep on adding machines. Whereas vertical machines have a hardware limit.

So to have a system design we need a system which is resilient, scales well, Inter Process Communication and consistent. These are hybrid systems.

Ok time for example. Lets make it a real world example Opening a restaurant

we have a restaurant and we have one chef. Initially we have a single source of operation and our shop doesn't see much traffic. Later we have a little bit of traffic and now customer orders take longer than usual. What do we do? How do we scale it?

Ans) Ask the chef to work harder and pay more money to the chef. (Optimize processes and increase through[ut with the same resource])(vertical scaling)
Now we can prepare the sauce/curry beforehand in our non peak hours.

What if the chef got sick?

Ans) This is a single point of failure we loose a bunch of sales that day or we can hire a backup chef incase the chef misses keep backups and avoid single point of failure for that day.(costly)
or hire more chefs so atleast work doesn't stop.(horizontal scaling)

lets say we have 3 chefs now A and B are good at indian dishes and C is good at italian. How do you route them?

Ans) We can do it randomly and assign available chefs orders but that hampers quality. To make it efficient we need to make indian orders to go to A and B and Italian to C. In case we need to change recipe for indian dish we don't need to make changes to C. This is known as microservice architecture.

Now if the shop caught fire or lost electricity what should be done?

Ans) We create another shop it might have less chefs and might require more time to cook and deliver but we will not loose out on profits for that day. We need to be able to route our orders to this Distributed Systems. Lets say If we have orders from backup shop than it should go to backup shops rather than main shop.

Lets take the case of Zomato(which simply takes your order not allow you to select restaurants)?

Ans) We have restaurants delivery partners and customer. There needs to be a central agency(load balancer) which decides on parameters set by us that which restaurant gets the order. Lets say our parameter is time to reach food to customer. Now one shop has time of 2hr and another is one hour. Now who gets the order the shop with less time gets the order and now the delivery partner goes collects the order and delivers to client. the delivery partner doesn't need to know which delivery he is taking care of. So we can have 2 separate systems one for central orders to restaurants and another for central to delivery partners(decoupling). So to cut time short we need to have order cook time and partner reach time to restaurant. meanwhile the partner travels to destination the food is getting prepared thus reducing the time(extensible). We need to have a logging system which logs everything.(logging for analytics)

Low Level Design?

it refers to coding the stuff. It recommends we need to have classes functions and other things in the classes when needed.
