/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocationHistoryWhereInput } from "./LocationHistoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LocationHistoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LocationHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => LocationHistoryWhereInput)
  @IsOptional()
  @Field(() => LocationHistoryWhereInput, {
    nullable: true,
  })
  every?: LocationHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => LocationHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => LocationHistoryWhereInput)
  @IsOptional()
  @Field(() => LocationHistoryWhereInput, {
    nullable: true,
  })
  some?: LocationHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => LocationHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => LocationHistoryWhereInput)
  @IsOptional()
  @Field(() => LocationHistoryWhereInput, {
    nullable: true,
  })
  none?: LocationHistoryWhereInput;
}
export { LocationHistoryListRelationFilter as LocationHistoryListRelationFilter };