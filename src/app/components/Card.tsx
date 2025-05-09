import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import MapPreview from "./MapPreview"

type CardProps = {
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
      name:string;
      catchPhrase:string;
    };
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo?: {
        lat: string;
        lng: string;
      }
    };
  };
};

export default function CardUser({ user }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {user.name && <h2 className="text-2xl">{user.name}</h2>}
        </CardTitle>
        <CardDescription>
          {user.email && <p className="text-small text-default-500 mb-1"><a href={`mailto:${user.email}`}>{user.email}</a></p>}
          {user.phone && <p className="text-small text-default-500"><a href={`tel:${user.phone}`}>{user.phone}</a></p>}
        </CardDescription>
      </CardHeader>
      {user.company && <CardContent>
        <div className="mb-4">
          {user.company.name && <h3 className="font-bold text-xl">{user.company.name}</h3>}
          {user.company.catchPhrase && <p>{user.company.catchPhrase}</p>}
          {user.address && <p>Address: {user.address.zipcode}, {user.address.city}, str.{user.address.street}, {user.address.suite}</p>}
          <a className="underline" href={user.website}>Visit our website</a>
        </div>
        {user.address.geo && <MapPreview lat={parseFloat(user.address.geo?.lat)} lng={parseFloat(user.address.geo?.lng)} />}
        
      </CardContent>}
      {user.website && <CardFooter>
        
      </CardFooter>}
    </Card>
  );
}
