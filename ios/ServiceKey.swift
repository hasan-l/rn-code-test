//
//  ServiceKey.swift
//  RNCodeTest
//
//  Created by Hasan Liaquat on 19/09/2021.
//

import Foundation

@objc(ServiceKey)
class Counter: NSObject {
  
  @objc
    func constantsToExport() -> [AnyHashable : Any]! {
      let service_key = Bundle.main.object(forInfoDictionaryKey: "SERVICE_KEY") as? String
      return ["serviceKey": service_key ?? "Service Key is nil"]
    }
}
