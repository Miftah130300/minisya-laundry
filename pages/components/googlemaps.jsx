import React from 'react';

const GoogleMap = () => {
  return (
    <div className='flex justify-center items-center mx-3 md:mx-0'>
        <iframe 
            className="w-full max-w-[900px] h-[450px] bg-blue-300 rounded-md mt-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.07310225108!2d108.60428917357834!3d-7.675290475972016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6597d6e45a9c8b%3A0x44293c7324e50bc!2sMINISYA%20LAUNDRY!5e0!3m2!1sid!2sid!4v1706005980621!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  );
};

export default GoogleMap;