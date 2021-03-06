import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePhoneDto } from './create-phone.dto';

export class UpdatePhoneDto extends PartialType(CreatePhoneDto) {
    
    @ApiProperty() 
    number: string; 
  
    @ApiProperty()  
    userId: string;
   
}
