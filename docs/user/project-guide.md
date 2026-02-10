import { AdminOnly, UserOnly } from '@site/src/components/Role';


## Admin Project Guide1
## User Project Guide1

<AdminOnly>
## Admin Project Guide
Only admins can see this.
</AdminOnly>

<UserOnly>
## User Project Guide
This only shows to users.
</UserOnly>


<UserOnly>

# User Project Guide
Users and admins can see this.

</UserOnly>
