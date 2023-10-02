import ReactDOM from 'react-dom';
import classes from './notification.module.css';
function Notification(props) {
  // Destructure props to extract title, message, and status
  const { title, message, status } = props;
  // Initialize an empty string for CSS classes
  let statusClasses = '';
  // Determine the CSS classes based on the status prop
  if (status === 'success') {
    statusClasses = classes.success;
  }
  if (status === 'error') {
    statusClasses = classes.error;
  }
  // Combine the base notification CSS class with status-specific classes
  const cssClasses = `${classes.notification} ${statusClasses}`;
  // Create a portal to render the notification outside of the current component hierarchy
  return ReactDOM.createPortal(
    <div className={cssClasses}>
      {/* Display the notification title */}
      <h2>{title}</h2>
      {/* Display the notification message */}
      <p>{message}</p>
    </div>,
    // Render the portal inside an element with the ID 'notifications'
    document.getElementById('notifications')
  );
}
export default Notification;