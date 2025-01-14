function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Neetu Rai",
      quote: "This is the best service I have ever used. Highly recommended!",
      avatar:
        "https://thumbs.dreamstime.com/b/indian-man-young-good-looking-people-smiling-standing-isolated-white-background-31400054.jpg",
    },
    {
      id: 2,
      name: "Neetu Rai",
      quote: "Amazing quality and excellent support. A 5-star experience.",
      avatar:
        "https://thumbs.dreamstime.com/b/indian-man-young-good-looking-people-smiling-standing-isolated-white-background-31400054.jpg",
    },
    {
      id: 3,
      name: "Neetu Rai",
      quote: "Fantastic products and quick delivery. Couldn't ask for more!",
      avatar:
        "https://thumbs.dreamstime.com/b/indian-man-young-good-looking-people-smiling-standing-isolated-white-background-31400054.jpg",
    },
  ];

  return (
    <div className="container py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">What Our Customers Say</h2>
        <p className="text-gray-600 mt-2">
          Hear from our satisfied customers who love our products and services.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className=" rounded-lg shadow-md p-6 text-center bg-yellow-100"
          >
            {/* Avatar */}
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            {/* Quote */}
            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
            {/* Name */}
            <h4 className="font-bold text-lg">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
