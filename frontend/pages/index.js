// frontend/pages/index.js
import ChatRoom from '../components/ChatRoom';
import withAuth from '../hoc/withAuth';

function Home() {
  return (
    <div>
      <ChatRoom />
    </div>
  );
}

export default withAuth(Home);
