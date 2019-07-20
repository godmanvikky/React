const images = require.context('../icon', true);
export const data=[
    {
        time:'Today 09:13AM',
        type:'Share',
        vh_img:images('./taxi.png'),
        dr_img:images('./p1.png'),
        crn:'CRN 3333840303',
        from:'23,Street A,Bangalore Road,23',
        to:'13,2nd Street,Meerut Nagar,Bangalore',
        price: 245

    },
    {
        time:'Yesterday 08:00PM',
        type:'Auto',
        vh_img:images('./auto.png'),
        dr_img:images('./p2.png'),
        crn:'CRN 2323940303',
        from:'13,Street A,Bangalore Road,23',
        to:'13th Floor,11th Street,Ram Nagar,Bangalore',
        price:540
    },
    {
        time:'Sun,Jul 14,10:10AM',
        type:'Lux',
        vh_img:images('./lux.png'),
        dr_img:images('./p3.png'),
        crn:'CRN 1133840303',
        from:'2nd MainRamamoorthy Nagar,2ndStreet A,Bangalore Road,23',
        to:'13,2nd Street,Meerut Nagar,Bangalore',
        price:700

    },
    {
        time:'Friday,Jul 12 11:03AM',
        type:'Mini',
        vh_img:images('./mini.png'),
        dr_img:images('./p2.png'),
        crn:'CRN 4334840502',
        from:'2nd Phase,Electronic City',
        to:'Silk Board Bus Stop',
        price:540

    },
    {
        time:'Today 09:13AM',
        type:'Outstation',
        vh_img:images('./out.png'),
        dr_img:images('./p3.png'),
        crn:'CRN 1233403075',
        from:'Forum Koramangala,Bangalore',
        to:'2nd Main Hsr Layout,Bangalore',
        price:2200

    },

]