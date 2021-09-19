//
//  ServiceKeyModule.m
//  RNCodeTest
//
//  Created by Hasan Liaquat on 19/09/2021.
//

#import <Foundation/Foundation.h>
// ServiceKeyModule.m
#import "ServiceKeyModule.h"
#import <React/RCTLog.h>

@implementation ServiceKeyModule

// To export a module named ServiceKeyModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getServiceKey:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
