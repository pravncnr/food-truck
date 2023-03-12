Full Stack: Food-Truck-as-a-Service
Lunch is important and knowing our lunch choices is even more so. While our office manager publishes a paper copy of the food truck schedule once a month, we’d like this service to be available digitally, so we can choose our lunch from the comfort of our desks. For an internal hackathon, you’ve been asked to write a server-and-UI into which we can manually add the food trucks for each month, and access today's choices. The requirements are:
•	A RESTful API that allows:
•	Data entry of the food trucks for each day.
•	Each food truck only needs a name and a date, not a location.
•	Editing food trucks if we have a typo.
•	Listing today’s Food trucks.
•	A UI that consumes the above API, and...
•	Permits easy data entry.
•	Allows a quick view of today's Food Truck options.
•	A persistence layer of your choice.
•	Assume it is running on a retired Linux server inside our firewall, so no authentication is needed.

Start server in  a new terminal:
`cd server && npm start`

Start client in a new terminal
`cd client && npm start`

1. Home Page
   ![](https://github.com/pravncnr/food-truck/tree/main//screenshots/Screenshot%202023-03-13%20at%202.21.27%20AM.png)

2. View all food trucks for today
   ![](https://github.com/pravncnr/food-truck/tree/main//screenshots/Screenshot%202023-03-13%20at%202.21.51%20AM.png)

3. All Food Trucks
   ![](https://github.com/pravncnr/food-truck/tree/main//screenshots/Screenshot%202023-03-13%20at%202.22.12%20AM.png)

4. form to add new food truck
   ![](https://github.com/pravncnr/food-truck/tree/main//screenshots/Screenshot%202023-03-13%20at%202.22.42%20AM.png)

5. Newly added food truck
   ![](https://github.com/pravncnr/food-truck/tree/main//screenshots/Screenshot%202023-03-13%20at%202.23.07%20AM.png)

6. Edit Existing food truck
   ![](https://github.com/pravncnr/food-truck/tree/main//screenshots/Screenshot%202023-03-13%20at%202.24.34%20AM.png)
