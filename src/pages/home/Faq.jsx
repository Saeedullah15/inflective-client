import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-6xl mx-auto my-20'>
            <h2 className='text-center font-bold text-3xl text-black mb-8'>Frequently Asked Questions</h2>
            <div className='space-y-2'>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is the Alternative Product Information System?</div>
                    <div className="collapse-content">
                        <p>The Alternative Product Information System is a platform that provides users with detailed information about various products, including reasons for boycotting certain items and suggesting better alternatives. It helps consumers make informed decisions based on ethical considerations, environmental impact, and product quality.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How does the recommendation system work?</div>
                    <div className="collapse-content">
                        <p>The recommendation system suggests alternative products based on the original product's attributes, such as eco-friendliness, affordability, and durability. Recommendations are tailored to address concerns highlighted by users, offering better or more ethical options.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What kind of products can I find on this platform?</div>
                    <div className="collapse-content">
                        <p>The platform covers a wide range of products, including eco-friendly household items, sustainable clothing, reusable products, organic food, and more. It focuses on items that have a significant impact on the environment and consumer health.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can I contribute to the platform?</div>
                    <div className="collapse-content">
                        <p>Users can contribute by submitting queries about specific products, detailing reasons for boycotting, and providing reviews or recommendations for alternative products. This collaborative approach ensures the platform remains up-to-date and relevant.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Why are some products recommended over others?</div>
                    <div className="collapse-content">
                        <p>Products are recommended based on a combination of factors, including sustainability, ethical production, user feedback, and product performance. The aim is to offer alternatives that align better with eco-friendly and socially responsible values.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;