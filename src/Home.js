import React from 'react';
import 
{ BsFillArchiveFill, BsPeopleFill, BsFillBellFill, BsPieChart, BsCheckCircle, BsFillInboxesFill, BsFillMenuButtonWideFill } 
from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';
import './Home.css';
import StarRating from './StarRating';
import './StarRating.css';

function Home() {
    const pieData = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const recentOrders = [
        { customer: 'John Doe', orderNo: '001', amount: '$150', status: 'Completed' },
        { customer: 'Jane Smith', orderNo: '002', amount: '$200', status: 'Pending' },
        { customer: 'Steve Brown', orderNo: '003', amount: '$100', status: 'Cancelled' },
        { customer: 'Emily White', orderNo: '004', amount: '$250', status: 'Completed' },
    ];

    const categories = [
        { name: 'Goals', icon: <BsCheckCircle /> },
        { name: 'Dishes', icon: <BsFillInboxesFill /> },
        { name: 'Menus', icon: <BsFillMenuButtonWideFill /> },
    ];

    const barData = [
        { name: 'Jan', activity: 4000 },
        { name: 'Feb', activity: 3000 },
        { name: 'Mar', activity: 2000 },
        { name: 'Apr', activity: 2780 },
        { name: 'May', activity: 1890 },
        { name: 'Jun', activity: 2390 },
        { name: 'Jul', activity: 3490 },
    ];

    const feedbackData = [
        { customer: 'John Doe', feedback: 'Excellent service!', rating: 4.5 },
        { customer: 'Jane Smith', feedback: 'Very satisfied!', rating: 5 },
        { customer: 'Sam Wilson', feedback: 'Good, but room for improvement.', rating: 3.5 },
      ];

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>Dashboard</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h5>Total Orders</h5>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h3>300</h3>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h5>Total Delivered</h5>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h3>20</h3>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h5>Customers</h5>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                    <h3>330</h3>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h5>Alerts</h5>
                        <BsFillBellFill className='card_icon'/>
                    </div>
                    <h3>42</h3>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h5>REVENUE</h5>
                        <BsPieChart className='card_icon'/>
                    </div>
                    <div className='card-content'>
                        <PieChart width={80} height={80}>
                            <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={30} fill="#8884d8" />
                        </PieChart>
                        <h3>$1,200</h3>
                    </div>
                </div>
            </div>

            <div className='details-container'>
                <div className='recent-orders'>
                    <h3>Recent Orders</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Order No</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.customer}</td>
                                    <td>{order.orderNo}</td>
                                    <td>{order.amount}</td>
                                    <td>{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='categories'>
                    {categories.map((category, index) => (
                        <div key={index} className='category-item'>
                            <div className='category-icon'>{category.icon}</div>
                            <span>{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='activity-feedback-container'>
                <div className='activity-section'>
                    <h3>Activity</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={barData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="activity" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="feedback-section">
                <h3>Customer Feedback</h3>
                <ul>
                  {feedbackData.map((feedback, index) => (
                    <li key={index}>
                      <p><strong>{feedback.customer}:</strong> {feedback.feedback}</p>
                      <StarRating rating={feedback.rating} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </main>
    );
}

export default Home;
