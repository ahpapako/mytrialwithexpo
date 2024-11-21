//ΑΠΟ ΤΟ ΒΙΝΤΕΟ   https://www.youtube.com/watch?v=vojHmGUGUGc&ab_channel=Supabase

import { GoogleSignin,
    GoogleSigninButton,
    statusCodes
 } from '@react-native-google-signin/google-signin'; 
import { View } from 'react-native';

 export default function App(){
GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
/*   webClientId: '106358887684468477868',         afou syndeuhka ebala ayto           τα στοιχεια που παιρνουμε απο τον πελατη
offlineAccess:true,
hostedDomain: '',
forceCodeForRefreshToken: true,
accountName: '',
iosClientId: 'your-ios-client-id',
googleServicePlistPath: '',
openIdRealm:'',
profileImageSize: 120,
*/
});

return(
    <View>
        <GoogleSigninButton
         size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async()=>{
            try{
                await GoogleSignin.hasPlayServices();
                const userInfo = await GoogleSignin.signIn();
                console.log(JSON.stringify(userInfo,null,2));
            }catch(error){
                console.log(error);
            }
        }}/>
    </View>
)
}

