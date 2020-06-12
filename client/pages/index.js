import buildClient from '../api/build-client';
import Link from 'next/link';

const LandingPage = ({ currentuser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

export async function getServerSideProps(context) {
  const client = buildClient(context);
  const { data } = await client.get('/api/tickets');
  return { props: { tickets: data } };
}

// LandingPage.getInitialProps = async () => {
//   if (typeof window === 'undefined') {
//     const { data } = await axios.get(
//       'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
//       {
//         headers: {
//           Host: 'ticketing.dev',
//         },
//       }
//     );
//     console.log('SERVER', data);
//     return data;
//   } else {
//     const { data } = await axios.get('/api/users/currentuser');
//     console.log('Client', data);
//     return data;
//   }
// };

export default LandingPage;
