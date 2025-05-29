SecureHer is a user-friendly mobile/web app built to enhance women's safety. 
It offers SOS alerts, live location tracking, and suggests the safest routes using smart algorithms like Dijkstra and DFS. 
Whether you're commuting or walking alone, SecureHer is your digital safety buddy.

Status: In Development

## Features

- SOS alert system to notify trusted contacts
- Real-time location tracking
- Quick access to emergency services
- Trusted contacts management
- Push notifications for alerts
- Clean and responsive user interface

## Tech Stack

- React Native (with TypeScript)
- Expo (for development and native functionality)
- Expo APIs (e.g., Location, SMS, Notifications)
- React Navigation for screen transitions
- Context API or other state management (optional)

## Folder Structure
SecureHer/
├── assets/ # App images and icons
├── components/ # Reusable UI components
├── screens/ # App screen files (.tsx)
├── App.tsx # Root component
├── app.json # Expo configuration
├── package.json # Dependencies and scripts

### Prerequisites

- Node.js and npm
- Expo CLI: `npm install -g expo-cli`


4. Use Expo Go on your mobile device or an emulator to view the app.

## Expo Permissions

Ensure the following permissions are declared in `app.json` or requested in-app:

- Location access
- SMS (Android only)
- Notifications

## TypeScript Migration

All screen files have been migrated to `.tsx` for better type safety, autocompletion, and reduced runtime errors.

## Roadmap

- [ ] Add fake call feature
- [ ] Integrate voice command trigger
- [ ] Implement background location tracking
- [ ] Store emergency history logs

## Contributing
Contributions are welcome. Please fork the repository and create a pull request with clear commit messages and a description of the changes.

## Status: In Development
This project is currently under active development. Some features may be incomplete or subject to change. Please feel free to explore, give feedback, or contribute.


## License
This project is licensed under the MIT License.

![image](https://github.com/user-attachments/assets/8309069c-31b6-4fc4-81a0-f4091ba95a18)

![image](https://github.com/user-attachments/assets/2caf9d31-5163-4066-98ef-ad8d72ec9705)



